import { config } from "dotenv";

config({ path: `.env.local` });
export const { PORT, DB_URI } = process.env;
