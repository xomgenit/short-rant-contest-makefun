// Angry Judge: The Short Rant Contest — entry program.
// Writes one short rant about the office printer to <outDir>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const opener = "The office printer has one job. One.";
const warmUp = "It has been 'warming up' since Tuesday, it has eaten three reams of paper,";
const punchline =
  "and it still prints my report in a font I have never seen, on a page I did not ask for, in a language I do not speak.";

const rant = [opener, warmUp, punchline].join(" ");

// Gate: entry must be 1-400 characters of non-whitespace text.
if (rant.length < 1 || rant.length > 400 || rant.trim().length === 0) {
  throw new Error(`entry length ${rant.length} is outside the 1-400 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");
console.log(`wrote entry.txt (${rant.length} chars)`);
