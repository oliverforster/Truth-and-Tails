import { json } from '@sveltejs/kit';
import { CreateCheckout, GetToken } from '$lib/server/sumUp';
export async function POST({ request }) {
	let body = await request.json();

	let token = await GetToken();

	let checkout = await CreateCheckout(body, token.access_token);
	return json({ checkout });
}
