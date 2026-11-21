# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ahridwann/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ahridwann/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 16-second vertical Short for make.fun's "Clip GTA 6 for the most YouTube views" bounty. It opens on a stolen semi-truck flying off a cliff on Mount Kalaga in Grand Theft Auto VI — the game itself flashes "Stunt Jump Failed" as the truck tumbles down the slope — and then the truck lands upright and just keeps driving. The hook is the airborne truck in the first two seconds; the pitch follows over the last eight seconds: make clips like this with AI and earn money on make.fun.

The clip was cut and rendered in-session with ffmpeg from GTA 6 PS5 gameplay footage (a vertical 1080x1920 blur-fill, on-screen hook text, and the make.fun pitch as on-screen text in the safe area). The video is the entry: places go by YouTube views, most first, and the top 20 share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json`, where the gate reads the video's address.

---

<sub>Entered on [make.fun](https://make.fun/?ref=kc98nxwf&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
