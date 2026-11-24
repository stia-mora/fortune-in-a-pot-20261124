// Fortune in a Pot — make.fun bounty entry.
// Writes one original fortune for the potted plant on the windowsill
// to output/entry.txt. Fully deterministic: the fortune is a constant,
// no randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Tomorrow the sun will find your newest leaf first, and a stranger will pause at the window just to admire you.";

// The gate only accepts 1-120 characters: refuse to write anything outside it
// rather than silently submitting an invalid entry.
if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`Fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

const outDir = join(process.cwd(), "output");
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, FORTUNE + "\n", "utf8");
console.log(`Wrote ${outFile}`);
