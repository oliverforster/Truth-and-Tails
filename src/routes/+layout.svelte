<script lang="ts">
	import { onDestroy } from 'svelte';
	import { showToast } from '$lib/stores/toastStore';
	import '../app.css';
	import headerImage from '$lib/images/coverphoto.jpg';
	import Header from './Header.svelte';
	let toast: string = 'hidden';
	let unsubscribe = showToast.subscribe((value: boolean) => {
		if (value) {
			toast = 'flex';
		} else {
			toast = 'hidden';
		}
	});
	onDestroy(unsubscribe);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src={headerImage} />
<Header />
<div
	class="fixed {toast} space-x right-5 top-5 w-full max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-white p-4 text-gray-500 shadow"
	role="alert"
>
	<a href="/basket" class="text-sm font-normal">Added to cart (click to go to checkout)</a>
</div>
<div class="container mx-auto">
	<slot />
</div>
