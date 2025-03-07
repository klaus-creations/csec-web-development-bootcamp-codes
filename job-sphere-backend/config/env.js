import { config } from "dotenv";

config({ path: `.env` });
export const { PORT, DB_URI } = process.env;
