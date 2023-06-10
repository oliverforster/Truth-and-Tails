import { json } from '@sveltejs/kit';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

export const GetToken = async () => {
	console.log(CLIENT_ID, CLIENT_SECRET);
	const response = await fetch('https://api.sumup.com/token', {
		method: 'POST',
		body: new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: CLIENT_ID,
			client_secret: CLIENT_SECRET
		})
	});

	const data = await response.json();
	console.log(data);
	return data;
};

export const CreateCheckout = async (body: Checkout, token: string) => {
	let auth = 'Bearer [TOKEN]';
	auth = auth.replace('[TOKEN]', token);

	console.log(auth);

	let checkRef = body.items + new Date().getTime();
	let checkout = await fetch('https://api.sumup.com/v0.1/checkouts', {
		method: 'POST',
		headers: {
			Authorization: auth,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			checkout_reference: checkRef,
			amount: body.total,
			currency: 'GBP',
			pay_to_email: 'dev_hywofhjs@sumup.com',
			description: body.items
		})
	});

	let checkoutData = await checkout.json();
	return checkoutData;
};

interface Checkout {
	total: number;
	items: string;
}
