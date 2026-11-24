// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst possible advice an AI could give to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR). Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The angle: the line is advice a real AI assistant would plausibly give —
// tidy, confident, helpful in tone — except the advice itself is a security
// disaster (one password everywhere). The badness is concrete and followable,
// and the punchline lands in the last few words ("only have to remember one").
const line =
  "Your password is too weak. Use the same strong password for every account, so you only have to remember one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
