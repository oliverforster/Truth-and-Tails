<script>
    import { page } from '$app/stores';
</script>

<div class="md:flex gap-x-2 bg-teal-darker">
    <a href="/"><h3 class="{$page.url.pathname == '/' ? 'underline' : ''}">Home</h3></a>
    <a href="/books"><h3 class="{$page.url.pathname == '/books' ? 'underline' : ''}">Books</h3></a>
    <a href="/news"><h3 class="{$page.url.pathname == '/news' ? 'underline' : ''}">News</h3></a>
    <a href="/shop"><h3 class="{$page.url.pathname == '/shop' ? 'underline' : ''}">Shop</h3></a>
    
	
	
	
	
</div>

<style lang="postcss">
    h3{
        @apply py-1 text-4xl text-orange-lighter hover:underline hover:cursor-pointer
    }
</style>