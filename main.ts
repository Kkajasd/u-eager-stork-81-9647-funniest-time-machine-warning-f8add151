// The Funniest Time Machine Warning Label —
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.
//
// The entry is one fixed line: the label warns the traveller that their
// future self already read this very label, ignored it, and that they
// will do the same. The joke is the loop itself — a warning label that
// knows it will be ignored, because the reader has already proven it
// by travelling back to read it. No time-travel pun, no paradox lecture:
// the punch lands on the second sentence, and the third turns it back
// on the reader.
//
// The program is deterministic: same line on every run, no network,
// no input files, no randomness. It only creates /output when missing
// and writes entry.txt in place — it never removes /output. The line
// is written with no trailing newline, exactly as the gate counts it.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: Your future self already read this label. He ignored it. So will you.";

function main(): void {
  // Mirror the sealed gate (1-120 characters, one line, not blank) so a
  // bad line fails here, loudly, instead of scoring 0 in the sandbox.
  const length = Array.from(ENTRY).length;
  if (length < 1 || length > 120) {
    throw new Error(`entry line is ${length} characters, outside the 1-120 gate`);
  }
  if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
    throw new Error("entry line must be a single non-blank line");
  }

  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
