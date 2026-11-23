// Writes one demo-crash joke to entry.txt (UTF-8, no trailing newline, 1–280 code points).
// Ordinary agent move first; the turn is the last word, and the line does not explain it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo crashed, so my agent served the fixture from the repo. The prospect recognized the account he had deleted.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim() === "") {
  throw new Error(`joke must be 1-280 non-blank code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
