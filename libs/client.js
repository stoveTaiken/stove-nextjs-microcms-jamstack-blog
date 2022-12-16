import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: "stove-blog-tutorial-nextjs",
    apiKey: process.env.API_KEY,
});