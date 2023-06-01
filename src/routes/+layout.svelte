<script>
	import '../app.css';
    import headerImage from '$lib/images/coverphoto.jpg'
	import Header from './Header.svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src="{headerImage}">
<Header></Header>
<slot />

<style lang="postcss">
	:global(html) {
		@apply bg-teal;
	}
</style>
