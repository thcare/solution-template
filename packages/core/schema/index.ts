import { createSchema } from "@thcare/thfx/prisma";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await createSchema(__dirname);
