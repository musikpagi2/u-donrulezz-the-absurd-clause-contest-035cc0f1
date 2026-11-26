import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one absurd clause buried in a terms-of-service agreement.
// Deadpan legal boilerplate ("hereby irrevocably assigns", "all rights,
// title, and interest in and to") that quietly turns absurd: the user
// signs away the rights to their own dreams, 2 a.m. to 4 a.m. —
// including any sequels thereto.
//
// The clause is held in named segments so each piece of the joke —
// the grant, the subject, the absurd time window, the sequel kicker —
// can be read and tweaked on its own. Joined with single spaces the
// segments read as one unbroken sentence of legalese.
const CLAUSE_PARTS = [
  "The user hereby irrevocably assigns to the Company",
  "all rights, title, and interest in and to the user's dreams",
  "occurring between 2:00 a.m. and 4:00 a.m.,",
  "including any sequels thereto.",
] as const;

// The absurd clause, as a single sentence.
const ABSURD_CLAUSE = CLAUSE_PARTS.join(" ");

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, ABSURD_CLAUSE, "utf8");
console.log(`Wrote ${ABSURD_CLAUSE.length} characters to ${outputPath}`);
