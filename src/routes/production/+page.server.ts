import type { PageServerLoad } from "./$types";
import { STRAPI_URL, STRAPI_TOKEN } from "$env/static/private";

export const load: PageServerLoad = async ({ params }) => {
    const res = await fetch(`${STRAPI_URL}/api/productions?populate=*&sort=order`, {
        'headers': {
            'Authorization': `Bearer ${STRAPI_TOKEN}`
        }
    });
    const data = await res.json();
    return data;
};