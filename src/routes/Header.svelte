<script lang="ts">
    import { page } from '$app/stores';
    import { IconMenu2 } from '@tabler/icons-svelte';
    import { slide } from 'svelte/transition';
    let iconSize: number = 34
    let show: boolean = false
    let showHide = function (){
        show = !show
    }
</script>

<div class="hidden gap-x-2 pl-2 bg-teal-darker items-center  md:flex">
    <a href="/"><h3 class="{$page.url.pathname == '/' ? 'underline' : ''}">Home</h3></a>
    <a href="/books"><h3 class="{$page.url.pathname == '/books' ? 'underline' : ''}">Books</h3></a>
    <a href="/news"><h3 class="{$page.url.pathname == '/news' ? 'underline' : ''}">News</h3></a>
    <a href="/shop"><h3 class="{$page.url.pathname == '/shop' ? 'underline' : ''}">Shop</h3></a>
</div>

<div class="gap-x-2 bg-teal-darker md:hidden">
    <button on:click={showHide}>
        <IconMenu2 class="text-orange-lighter"/>
    </button>
    {#if show}
    <div transition:slide>
        <a href="/" on:click={showHide}><h3 class="{$page.url.pathname == '/' ? 'underline' : ''}">Home</h3></a>
        <a href="/books" on:click={showHide}><h3 class="{$page.url.pathname == '/books' ? 'underline' : ''}">Books</h3></a>
        <a href="/news" on:click={showHide}><h3 class="{$page.url.pathname == '/news' ? 'underline' : ''}">News</h3></a>
        <a href="/shop" on:click={showHide}><h3 class="{$page.url.pathname == '/shop' ? 'underline' : ''}">Shop</h3></a>
    </div>
    {/if}
</div>

<style lang="postcss">
    h3{
        @apply py-1 text-4xl text-orange-lighter hover:underline hover:cursor-pointer
    }
</style>