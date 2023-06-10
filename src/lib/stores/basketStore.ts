import { writable } from 'svelte/store';

let initValue: BasketItem[] = [];
//set up basket store with value from localstorage
export const basket = writable(initValue);

interface BasketItem {
	title: string;
	price: number;
	quantity: number;
}
