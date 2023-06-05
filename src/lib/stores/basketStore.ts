import { writable } from "svelte/store";

//if localstorage has basket, use it, otherwise use empty array
let existingBasket: BasketItem[] = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket') || '{}') : [];

//set up basket store with value from localstorage
export const basket = writable(existingBasket);

basket.subscribe((value) => {
    localStorage.setItem('basket', JSON.stringify(value));
})


interface BasketItem {
    id: number;
    quantity: number;
}