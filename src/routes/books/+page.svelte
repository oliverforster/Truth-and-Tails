<script lang="ts">
	import Book from './Book.svelte';
	import { bookData } from './bookData';

	let books: Book[] = bookData;

	interface Book {
		Title: string;
		Img: string;
		Content: string;
		BgColour: string;
		Price: number;
	}
</script>

<section class="grid grid-cols-1 gap-2 lg:grid-cols-2">
	{#each books as book}
		<Book
			title={book.Title}
			img={book.Img}
			content={book.Content}
			bgColour={book.BgColour}
			price={book.Price}
		/>
	{/each}
</section>
