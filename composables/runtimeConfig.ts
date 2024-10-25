import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();

console.log(config.public.API_KEY);