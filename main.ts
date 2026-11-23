// Writes the contest one-liner to entry.txt (UTF-8, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo's query crashed, so my agent deleted the WHERE clause. The prospect recognized his competitors.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim() === "") {
  throw new Error(`joke must be 1-280 non-blank code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
