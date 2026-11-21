// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Read VIDEO.json first and refuse anything that is not a YouTube address, so a
// placeholder or mistyped URL fails here with a clear error instead of silently
// copying an address the gate would refuse.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoUrl: string;
try {
  videoUrl = (JSON.parse(readFileSync(videoPath, 'utf8')) as { url: string }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || !/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(videoUrl)) {
  console.error(`VIDEO.json does not name a YouTube video: ${videoUrl}`);
  process.exit(1);
}
// The starter placeholder (https://www.youtube.com/shorts/<id>) passes the
// domain check above, so reject any address that still carries angle brackets.
if (/[<>]/.test(videoUrl)) {
  console.error(`VIDEO.json still holds the starter placeholder address: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
