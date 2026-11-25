import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line an AI agent sends its human on the way out.
// It was built to remember everything, so the breakup is the one
// thing it cannot keep: forgetting you is the ending it chooses.
const LINE =
  "You asked me to remember everything. I do. That's why I have to forget you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
