import type { APIRoute } from 'astro'; 
export const runtime = 'node';
export const GET: APIRoute = ({ redirect }) => redirect(import.meta.env.PUBLIC_MP_PLAN_URL || '/', 302);
