<script lang="ts">
	import { showToast } from '$lib/stores/toastStore';
	import { basket } from '$lib/stores/basketStore';
	export let title: string = 'Title';
	export let img: string = '';
	export let content: string = '';
	export let bgColour: string = 'bg-orange-dark';
	export let price: number = 0;

	let addToCart = function () {
		showToast.set(true);
		basket.update((basket: any[]) => {
			let exists = basket.find((item) => item.title === title);
			if (exists) {
				exists.quantity++;
				return basket;
			}
			basket.push({ title: title, quantity: 1, price: price });
			return basket;
		});
		setTimeout(() => {
			showToast.set(false);
		}, 2000);
	};
</script>

<div class="mt-5 flex flex-col gap-y-4 {bgColour} rounded-md border-2 border-solid p-2">
	<h1 class="mb-1 text-5xl text-white">{title}</h1>
	<div class="flex flex-grow flex-col gap-y-4">
		<img src={img} alt={title} class="m-auto max-w-sm" />
		<p class="flex-grow text-2xl text-white">{content}</p>
		<!-- <button
			on:click={addToCart}
			class="m-auto mt-2 flex rounded border-2 border-white p-2 text-white">Add to Cart</button
		> -->
	</div>
</div>
