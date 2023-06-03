<script lang="ts">
    export let title: string = 'Title';
    export let img: string = '';
    export let content: string = '';
    export let bgColour:string = 'bg-orange-dark'
</script>

<div class="mt-5 {bgColour} p-1 border-solid border-2 rounded-md">
    <h1 class="text-5xl text-white mb-1">{title}</h1>
    <div class="flex flex-col">
        <img src="{img}" alt="{title}" class="max-w-sm m-auto">
        <p class=" text-2xl text-white">{content}</p>
    </div>
</div>