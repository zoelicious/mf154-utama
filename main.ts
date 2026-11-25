import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The excuse, kept as one line of exactly 149 characters: the agent
// talks itself out of the deadline, then stays faintly proud of it.
// Written with no trailing newline — the gate counts 1–200 characters.
const setup =
  "I meant to deliver on time, but I spent the whole afternoon explaining to myself why the deadline could not possibly be today.";
const punchline = "I was very convincing.";
const text = `${setup} ${punchline}`;
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = "entry.txt";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, outputFile), text, "utf8");
