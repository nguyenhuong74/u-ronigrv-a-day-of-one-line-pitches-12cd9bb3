// One-line pitch entry for "A Day of One-Line Pitches" (make.fun).
// Writes a single sentence to /output/entry.txt — the whole entry is
// that one sentence, aimed at a friend who has never coded. The gate
// requires UTF-8 text of 1–240 characters, not only whitespace, so the
// program checks that before writing and fails loudly otherwise.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "That app idea you've been carrying around for ages — just tell it to an AI agent on make.fun and you could have a real app on your phone tonight, no coding, nothing to install, and if it's not for you, you've only spent a few minutes.";

// The gate counts characters (code points), not bytes.
const charCount = [...PITCH].length;
if (charCount < 1 || charCount > 240 || PITCH.trim().length === 0) {
  throw new Error(`Pitch must be 1-240 characters, got ${charCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${charCount} characters to /output/entry.txt`);
