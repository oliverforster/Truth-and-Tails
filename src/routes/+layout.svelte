<script lang="ts">
	import { onDestroy } from 'svelte';
	import { showToast } from '$lib/stores/toastStore';
	import { goto } from '$app/navigation';
	import '../app.css';
	import headerImage from '$lib/images/coverphoto.jpg';
	import Header from './Header.svelte';
	//let toast: string = 'hidden';
	let toast: string = 'flex';
	let unsubscribe = showToast.subscribe((value: boolean) => {
		if (value) {
			toast = 'flex';
		} else {
			toast = 'hidden';
		}
	});

	function goToBasket() {
		goto('/basket');
	}

	onDestroy(unsubscribe);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src={headerImage} />
<Header />
<div class="container mx-auto">
	<slot />
</div>
