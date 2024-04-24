import type { PageServerLoad } from "./$types";
import { STRAPI_API_URL } from "$env/static/private";

export let prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    const res = await fetch(`${STRAPI_API_URL}/api/photoshoots?populate=*`);
    const data = await res.json();
    return data;
};