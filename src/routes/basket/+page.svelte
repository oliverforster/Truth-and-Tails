<script>
	import { basket } from '$lib/stores/basketStore';

	async function checkout() {
		let checkout = {
			total: 0,
			items: '['
		};
		$basket.forEach((item) => {
			checkout.total += item.price * item.quantity;
			checkout.items += '{title: "' + item.title + '", quantity: ' + item.quantity + '}';
		});
		checkout.total = Number(checkout.total.toFixed(2));
		checkout.items += ']';

		console.log(checkout);
		const response = await fetch('/sumUp/createCheckout', {
			method: 'POST',
			body: JSON.stringify(checkout)
		});
		console.log(await response.json());
	}
	// @ts-ignore
	function createPayment() {
		// @ts-ignore
		SumUpCard.mount({
			id: 'sumup-card',
			checkoutId: '4a66ce23-ed8d-431c-8f3b-faa081d1afef',
			// @ts-ignore
			onResponse: function (type, body) {
				console.log('Type', type);
				console.log('Body', body);
			}
		});
	}
</script>

{#if $basket.length === 0}
	<h3 class="my-6 text-3xl text-headerBlue">
		Basket is empty <a class="underline" href="/books">click here</a> to see all books
	</h3>
{:else}
	<button class="rounded border-2 text-2xl" on:click={checkout}>Checkout</button>
{/if}
<div class="mt-4 flex flex-col divide-y divide-orange-darker text-2xl">
	{#each $basket as item}
		<div class="flex flex-row items-center py-4">
			<div class="basis-1/3">
				<h3>{item.title}</h3>
			</div>
			<div class="flex basis-1/3 flex-row items-center justify-center gap-2">
				<button on:click={() => item.quantity--} class="rounded border-2 text-3xl">-</button>
				<input class="flex w-5" type="text" bind:value={item.quantity} min="0" />
				<button on:click={() => item.quantity++} class="rounded border-2 text-3xl">+</button>
			</div>
			<div class="flex basis-1/3 justify-end">
				<h3>
					£{(item.price * item.quantity).toFixed(2)}
				</h3>
			</div>
		</div>
	{/each}
</div>
<button on:click={createPayment}>Pay</button>
<div id="sumup-card" />
