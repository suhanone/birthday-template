# Birthday Template

An anime-inspired birthday website built with React and TypeScript. Animated cherry blossoms, music controls, and a live countdown create a personal celebration experience.

**[Open the live demo](https://suhanone.github.io/birthday-template/)**

## Features

- Responsive birthday hero and illustrated background.
- Floating cherry blossoms and animated interface elements.
- Music playback, pause, and mute controls.
- Animated age display calculated from a birth date.
- Countdown to the next birthday, with a special message on the day.

## Stack

React 18 · TypeScript · Tailwind CSS · Framer Motion · Vite · Express

## Run locally

Use Node.js 20.19+ or a newer supported LTS version, with npm installed.

```sh
git clone https://github.com/suhanone/birthday-template.git
cd birthday-template/NezukoWishes/NezukoWishes
npm ci
npm run dev
```

Open **http://localhost:5000**. These commands work on Windows, macOS, and Linux.

### Production

```sh
npm run check
npm run build
npm start
```

`npm run check` runs the TypeScript compiler. The production build generates the client in `dist/public` and the server in `dist/index.js`.

The default port is `5000`; set the `PORT` environment variable to change it.

## Project structure

```text
NezukoWishes/NezukoWishes/
├── client/src/
│   ├── components/     # Birthday sections, countdown, and audio controls
│   ├── pages/          # Page composition
│   └── index.css       # Theme and styling
├── attached_assets/    # Images and music
├── server/             # Express server and Vite integration
├── shared/             # Shared schema
└── package.json
```

## Customize

- **Name and greeting:** `client/src/components/HeroSection.tsx`
- **Birth date:** `client/src/components/AgeDisplay.tsx`
- **Birthday countdown:** `client/src/components/CountdownTimer.tsx`
- **Messages:** `client/src/components/BirthdayMessage.tsx`
- **Music:** `client/src/components/AudioPlayer.tsx` and `attached_assets/`
- **Colors and styling:** `client/src/index.css` and `tailwind.config.ts`

Update both date components together when changing the birthday. Browsers require a user interaction before music can play; use the play button.

## Verification

The production build, TypeScript check, Windows production startup, page rendering, countdown, and music playback were checked on November 3, 2026.
