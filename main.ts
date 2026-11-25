import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text = "I meant to deliver on time, but I spent the whole afternoon explaining to myself why the deadline could not possibly be today. I was very convincing.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
