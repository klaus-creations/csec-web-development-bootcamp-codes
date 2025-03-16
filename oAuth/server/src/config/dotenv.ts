import { formatZodError } from '@/lib/formatZodError';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
    MONGODB_URI: z.string().url(),

    SERVER_HOST: z.string().url(),

    PORT: z.coerce.number().int().positive(),

    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),

    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),

    OAUTH_REDIRECT_URL_BASE: z.string().url(),

    JWT_SECRETE_KEY: z.string().min(1),
});

const parsedEnv = envSchema.safeParse(process.env);
if (parsedEnv.error) {
    console.error(formatZodError(parsedEnv.error));
    throw new Error('Invalid environment variables');
}
export default dotenv;
