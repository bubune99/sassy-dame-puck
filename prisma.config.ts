import 'dotenv/config';
import path from "node:path";
import { defineConfig } from "prisma/config";

const databaseUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder';

export default defineConfig({
  schema: path.join(__dirname, "prisma", "schema.prisma"),
  datasource: {
    url: databaseUrl,
  },
});
