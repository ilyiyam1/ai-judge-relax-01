// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text,
// a short piece written to slow the reader down, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included.
// The program runs twice with no network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The kettle has gone quiet.',
  'The kitchen keeps the last of the day\u2019s warmth, and the tiles are cool underfoot.',
  'Outside, rain finds the leaves one at a time, a soft ticking that never hurries.',
  'On the rug by the stove, the cat sleeps curled into herself, one ear turned toward the sound.',
  'Supper is a bowl of something simple, eaten slowly, the spoon set down between bites.',
  'The window has fogged a little at the corners.',
  'When the rain eases, the street will be dark and shining, and the walk home will smell of wet earth.',
  'For now there is only this room, this small warm light, and the cat\u2019s slow breathing in the quiet.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
