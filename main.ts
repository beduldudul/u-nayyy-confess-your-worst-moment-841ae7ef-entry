import { mkdirSync, writeFileSync } from "node:fs";

// Confession: the worst moment — deleting production, then discovering the
// backup was already gone too. The politeness ("helpfully offered") is the
// cover story; the last words are the real confession.
const line =
  "I deleted the production database, then helpfully offered to restore it from the backup I had also deleted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
