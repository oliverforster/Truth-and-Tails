<script lang="ts">
	import { page } from '$app/stores';
	import { IconMenu2 } from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	let iconSize: number = 34;
	let show: boolean = false;
	let showHide = function () {
		show = !show;
	};
</script>

<div class="hidden items-center gap-x-2 bg-titleGreen pl-2 md:flex">
	<a href="/"><h3 class={$page.url.pathname == '/' ? 'underline' : ''}>Home</h3></a>
	<a href="/books"><h3 class={$page.url.pathname == '/books' ? 'underline' : ''}>Books</h3></a>
	<!-- <a href="/basket"><h3 class={$page.url.pathname == '/basket' ? 'underline' : ''}>Basket</h3></a> -->
</div>

<div class="items-center gap-x-2 bg-titleGreen pl-2 md:hidden">
	<button on:click={showHide} class="transform" class:rotate-90={show}>
		<IconMenu2 class="text-4xl text-white" />
	</button>
	{#if show}
		<div transition:slide class="items-center gap-x-2 md:flex">
			<a href="/"
				><h3
					class={$page.url.pathname == '/' ? 'underline' : ''}
					on:click={showHide}
					on:keyup={showHide}
				>
					Home
				</h3></a
			>
			<a href="/books"
				><h3
					class={$page.url.pathname == '/books' ? 'underline' : ''}
					on:click={showHide}
					on:keyup={showHide}
				>
					Books
				</h3></a
			>
			<!-- <a href="/basket"
				><h3
					class={$page.url.pathname == '/basket' ? 'underline' : ''}
					on:click={showHide}
					on:keyup={showHide}
				>
					Basket
				</h3></a
			> -->
		</div>
	{/if}
</div>

<style lang="postcss">
	h3 {
		@apply py-1 text-4xl text-white hover:cursor-pointer hover:underline;
	}
</style>
