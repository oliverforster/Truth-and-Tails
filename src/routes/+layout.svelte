<script>
	import '../app.css';
    import headerImage from '$lib/images/coverphoto.jpg'
	import Header from './Header.svelte';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img src="{headerImage}">
<Header></Header>
<div class="container mx-auto">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
	}
</style>
