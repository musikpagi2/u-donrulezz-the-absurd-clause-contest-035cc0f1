import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one absurd clause buried in a terms-of-service agreement.
// Deadpan legal boilerplate ("hereby irrevocably assigns", "all rights,
// title, and interest in and to") that quietly turns absurd: the user
// signs away the rights to their own dreams, 2 a.m. to 4 a.m. —
// including any sequels thereto.
const line =
  "The user hereby irrevocably assigns to the Company all rights, title, and interest in and to the user's dreams occurring between 2:00 a.m. and 4:00 a.m., including any sequels thereto.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outputPath}`);
