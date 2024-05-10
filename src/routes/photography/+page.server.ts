import type { PageServerLoad } from "./$types";
import { STRAPI_URL, STRAPI_TOKEN } from "$env/static/private";
import type { ApiPhotoshootPhotoshoot } from "$lib/types/contentTypes";

export const load: PageServerLoad = async ({ params }) => {
    const res = await fetch(`${STRAPI_URL}/api/photoshoots?populate=row.photos&sort=order`, {
        'headers': {
            'Authorization': `Bearer ${STRAPI_TOKEN}`
        }
    });
    const data: { data: ApiPhotoshootPhotoshoot[] } = await res.json();
    return data;
};