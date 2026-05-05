# Pixels to Punk Cyber — Claude Context

VS Code extension: 50 color themes, 2 icon themes, 1 product icon theme, workspace mood presets, and time-of-day switching. Inspired by the From Pixels to Punk brand — anime-pop color, punk energy. Public, MIT. Not on the VS Code Marketplace — distributed via GitHub releases as a `.vsix`.

Full developer reference: `DEV.md`. Full install guide: `QUICKSTART.md`.

## What This Is Not

Not a compiled app. Not a server. VS Code reads the JSON and SVG files directly. No TypeScript compilation step — `src/extension.js` is plain JavaScript.

## Key Commands

```bash
npm run build:file-icons        # regenerate SVG icons + icon maps
npm run build:git-decorations   # regenerate git status colors
npm run build:status-bar-states # regenerate status bar colors
npm run demo:terminal-colors    # test terminal color output in terminal
npm run package                 # build .vsix release file
npm run install:vsix            # install the built .vsix into VS Code
npm run clean                   # remove node_modules and .vsix files
```

## Testing Changes Live

Press `F5` in VS Code with this folder open — launches an Extension Development Host with the current theme loaded. Run `Developer: Reload Window` after any JSON change.

## Repo Structure

```
themes/          ← color theme JSON files (50 themes)
icons/           ← dark SVG file icons + icon theme JSON maps
icons/light/     ← light SVG file icons
producticons/    ← product icon theme JSON + font
scripts/         ← build scripts for icons, git colors, status bar
src/extension.js ← command palette commands (mood presets, pairs, time-of-day)
mac-terminal-themes/ ← importable macOS Terminal profiles
```

## Standards

- Every new theme needs dark + light consideration, plus glasses/low-glare variants where relevant
- Run `npm run build:file-icons` after any icon change — don't hand-edit the generated SVG or JSON maps
- `package.json` version bump + `package-lock.json` match required before a release PR
- Merging to `main` triggers the release workflow automatically — only bump version when intentionally releasing

## Release Flow

1. Bump version in `package.json` and `package-lock.json`
2. Run `npm run build:file-icons && npm run package` to verify
3. PR → merge to `main` → GitHub Actions publishes the release and `.vsix` automatically
