<script lang="ts">
    import {showToast} from '$lib/stores/toastStore';
	export let title: string = 'Title';
	export let img: string = '';
	export let content: string = '';
	export let bgColour: string = 'bg-orange-dark';

    let addToCart = function(){
        showToast.set(true)
        setTimeout(() => {
            showToast.set(false)
        }, 2000)
    }
</script>

<div class="mt-5 {bgColour} rounded-md border-2 border-solid p-2">
	<h1 class="mb-1 text-5xl text-white">{title}</h1>
	<div class="flex flex-col">
		<img src={img} alt={title} class="m-auto max-w-sm" />
		<p class=" text-2xl text-white">{content}</p>
		<button on:click={addToCart} class="flex m-auto mt-2 p-2 text-white rounded border-white border-2">Add to Cart</button>
	</div>
</div>
