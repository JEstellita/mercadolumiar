import type { APIRoute } from 'astro'; 
export const runtime = 'node';
export const GET: APIRoute = ({ redirect }) => redirect(import.meta.env.PUBLIC_WA_URL || '/', 302);
