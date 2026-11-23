import { mkdirSync, writeFileSync } from "node:fs";

// One original line about office life: the team-building escape room
// that finally got the whole department cooperating — on the exit.
const LINE = "Our team-building exercise was an escape room, and HR called it a triumph: for the first time all year, the whole department worked together to leave the office.";

// The gate only accepts 1-199 characters of non-blank text; fail loudly
// here rather than ship an entry the scorer would mark invalid.
const MAX_CHARS = 199;
if (LINE.trim().length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
