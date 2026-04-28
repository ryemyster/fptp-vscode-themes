# Developer Guide

Use this if you want to change the themes, build the install file, or help with the project.

This guide uses plain words on purpose.

## What This Project Is

This folder is a VS Code extension.

The extension adds:

- color themes
- file icon themes
- folder icons
- terminal colors
- workbench colors

The extension does not run a server.

The extension does not compile an app.

VS Code reads the JSON and SVG files in this repo.

## Important Places

| File or Folder | What It Does |
| --- | --- |
| `package.json` | Tells VS Code what this extension adds. |
| `themes/` | Holds the color theme JSON files. |
| `icons/` | Holds the dark icon theme files and dark SVG icons. |
| `icons/light/` | Holds the light SVG icons. |
| `icons/pixels-to-punk-cyber-icon-theme.json` | Maps files to dark icons. |
| `icons/pixels-to-punk-cyber-light-icon-theme.json` | Maps files to light icons. |
| `producticons/` | Holds the product icon theme and product icon font. |
| `src/extension.js` | Adds command palette commands, including theme pairs, workspace mood presets, and time-of-day switching. |
| `scripts/build-theme-variants.js` | Builds theme variants from palettes. |
| `scripts/build-file-icons.js` | Builds file icons and icon maps. |
| `scripts/build-git-decorations.js` | Builds Git added, modified, deleted, renamed, ignored, conflict, and submodule colors. |
| `scripts/build-status-bar-states.js` | Builds status bar warning, error, remote, debug, and hover colors. |
| `scripts/terminal-colors.js` | Prints terminal colors for testing. |
| `README.md` | Home page for the repo. |
| `QUICKSTART.md` | Short install guide for users. |
| `DEV.md` | This developer guide. |

## Try The Extension From Source

Use this when you want to test changes before making a release.

This works because VS Code can run a theme extension from its `package.json`.

1. Open VS Code.
2. Open this folder: `vscode-themes-vibecoded`.
3. Press `F5`.
4. A second VS Code window opens.
5. In the second window, press `Command + Shift + P`.
6. Type:

   ```text
   Color Theme
   ```

7. Pick a **Pixels to Punk** theme.
8. Press `Command + Shift + P` again.
9. Type:

   ```text
   File Icon Theme
   ```

10. Pick **Pixels to Punk Cyber Icons** or **Pixels to Punk Cyber Icons Light**.

The extension defaults to **Pixels to Punk Cyber Icons**.

If you test a light color theme, pick **Pixels to Punk Cyber Icons Light** by hand.

## Change Theme Colors

Theme colors live in `themes/`.

To change one:

1. Open a theme JSON file in `themes/`.
2. Change one color.
3. Save the file.
4. Go to the Extension Development Host window.
5. Run **Developer: Reload Window**.

A color looks like this:

```json
"editor.background": "#101019"
```

The part with `#` is the color.

## File Icons

File icons are the tiny pictures beside file names in VS Code.

They help people find files faster.

Examples:

- `index.ts` gets a TypeScript icon.
- `App.tsx` gets a React icon.
- `package.json` gets a package icon.
- `README.md` gets a readme icon.
- `.env` gets an environment icon.

### Where To Update File Icons

The icon recipe lives here:

```text
scripts/build-file-icons.js
```

The generated dark icons live here:

```text
icons/file-*.svg
```

The generated light icons live here:

```text
icons/light/file-*.svg
```

The dark icon map lives here:

```text
icons/pixels-to-punk-cyber-icon-theme.json
```

The light icon map lives here:

```text
icons/pixels-to-punk-cyber-light-icon-theme.json
```

### How To Add A File Icon

1. Open `scripts/build-file-icons.js`.
2. Add a new item to `iconSpecs`.
3. Add the file extension, file name, or language ID to the right map.
4. Run:

   ```sh
   npm run build:file-icons
   ```

5. Test the icon theme in VS Code.

### When To Update File Icons

Update file icons when:

- a common file still looks plain
- a new framework becomes important
- a file icon is hard to read
- the dark icon looks good but the light icon does not
- the light icon looks good but the dark icon does not

## Product Icons

Product icons are the tiny built-in VS Code button icons.

They are not file icons.

They show up in places like:

- Search
- Source Control
- Run and Debug
- Terminal
- Settings
- close buttons
- refresh buttons
- warning and error icons

This project includes **Pixels to Punk Product Icons**.

It uses the VS Code Codicon font bundled into this extension, then maps common workbench icons to a more Pixels to Punk set of glyphs.

### How People Use Product Icons

1. Open the Command Palette.
2. Run:

   ```text
   Preferences: Product Icon Theme
   ```

3. Pick **Pixels to Punk Product Icons**.

### Where To Update Product Icons

The product icon theme lives here:

```text
producticons/pixels-to-punk-product-icon-theme.json
```

The font lives here:

```text
producticons/pixels-to-punk-product-icons.ttf
```

The theme is registered in `package.json` under:

```text
contributes.productIconThemes
```

### When To Update Product Icons

Update product icons when:

- a common VS Code action still feels too plain
- an icon is hard to recognize at small size
- Search, Source Control, Run, Terminal, or Settings need a better glyph
- warning or error icons lose clarity
- the product icons stop matching the color themes

### Theme Fit Notes

Product icon themes are single-color.

VS Code chooses the color from the active color theme.

That means the product icon theme should use clear shapes, not tiny details.

## Theme Fit Rule

Do not assume one design works everywhere.

This project has many moods:

- dark
- light
- low-glare
- neon
- zine
- rainy
- high contrast

When you add a new thing, ask:

- What is this new thing?
- How do people use it?
- When should we update it?
- Where in the repo do we update it?
- Does it need dark and light versions?
- Does it need high-contrast versions?
- Does it need softer versions for eye-comfort themes?
- Does it need louder versions for neon themes?

The goal is not to make every theme identical.

The goal is to make every theme feel like it belongs.

## Workspace Mood Presets

A workspace mood preset is one command that changes a few VS Code settings for the folder a person has open.

It is opt-in.

It does not run automatically.

It does not change code.

It only writes workspace settings.

If no folder or workspace is open, the command shows a warning and does not change anything.

### What The Presets Change

Each preset can change:

- `workbench.colorTheme`
- `workbench.iconTheme`
- `editor.minimap.enabled`
- `editor.stickyScroll.enabled`
- `editor.guides.bracketPairs`
- `editor.bracketPairColorization.enabled`
- `editor.renderWhitespace`
- `editor.cursorBlinking`
- `editor.wordWrap`
- `terminal.integrated.tabs.enabled`

### Current Presets

| Preset | Color Theme | Icon Theme | Why It Exists |
| --- | --- | --- | --- |
| Deep Work | Pixels to Punk Cyber Dark for Those with Glasses | Pixels to Punk Cyber Icons | Quiet dark setup for focused work. |
| Terminal Night | Pixels to Punk CRT After Midnight | Pixels to Punk Cyber Icons | Terminal-heavy setup with CRT energy. |
| Zine Shop | Pixels to Punk Zine Shop Window | Pixels to Punk Cyber Icons Light | Warm light setup for docs and notes. |
| Maximum Neon | Pixels to Punk Riot Glow Dark | Pixels to Punk Cyber Icons | Loud neon setup. |
| Low Glare | Pixels to Punk Soft Focus Night | Pixels to Punk Cyber Icons | Softer setup for tired eyes. |
| Low Glare Light | Pixels to Punk Soft Focus Day | Pixels to Punk Cyber Icons Light | Softer light setup for tired eyes. |

### How People Use Them

1. Open a folder in VS Code.
2. Open the Command Palette.
3. Run:

   ```text
   Pixels to Punk: Pick Workspace Mood Preset
   ```

4. Pick a mood.

They can also run a preset directly:

- `Pixels to Punk: Apply Deep Work Preset`
- `Pixels to Punk: Apply Terminal Night Preset`
- `Pixels to Punk: Apply Zine Shop Preset`
- `Pixels to Punk: Apply Maximum Neon Preset`
- `Pixels to Punk: Apply Low Glare Preset`
- `Pixels to Punk: Apply Low Glare Light Preset`

### How People Undo Them

Run:

```text
Pixels to Punk: Reset Workspace Mood Preset
```

That clears the settings listed above from workspace settings.

### Where To Update Presets

The preset code lives here:

```text
src/extension.js
```

The command list lives in `package.json` under:

```text
contributes.commands
```

The command activation list lives in `package.json` under:

```text
activationEvents
```

### When To Update Presets

Update presets when:

- a new theme becomes a better fit for a mood
- a setting feels too noisy or too quiet
- a light preset needs a light icon theme
- a dark preset needs a dark icon theme
- users need a clearer reset path
- a new mood gets added

## Matching Theme Pair Commands

A matching theme pair is one command that sets:

- `workbench.colorTheme`
- `workbench.iconTheme`

It is useful when a person wants the color theme and icon theme to match without picking both by hand.

### Current Pairs

| Pair | Color Theme | Icon Theme |
| --- | --- | --- |
| Cyber Dark | Pixels to Punk Cyber Dark | Pixels to Punk Cyber Icons |
| Cyber Light | Pixels to Punk Cyber Light | Pixels to Punk Cyber Icons Light |
| Soft Focus Day | Pixels to Punk Soft Focus Day | Pixels to Punk Cyber Icons Light |
| Soft Focus Night | Pixels to Punk Soft Focus Night | Pixels to Punk Cyber Icons |
| High Contrast Dark | Pixels to Punk Original High Contrast | Pixels to Punk Cyber Icons |
| High Contrast Light | Pixels to Punk Electric Sticker Sheet High Contrast | Pixels to Punk Cyber Icons Light |

### How People Use Them

Run:

```text
Pixels to Punk: Pick Matching Theme Pair
```

They can also run a pair directly:

- `Pixels to Punk: Activate Cyber Dark Pair`
- `Pixels to Punk: Activate Cyber Light Pair`
- `Pixels to Punk: Activate Soft Focus Day Pair`
- `Pixels to Punk: Activate Soft Focus Night Pair`
- `Pixels to Punk: Activate High Contrast Dark Pair`
- `Pixels to Punk: Activate High Contrast Light Pair`

To only fix the icon theme for the current color theme, run:

```text
Pixels to Punk: Activate Matching Icon Theme
```

### Where To Update Pairs

The pair list lives in:

```text
src/extension.js
```

The command list lives in `package.json` under:

```text
contributes.commands
```

The command activation list lives in `package.json` under:

```text
activationEvents
```

### When To Update Pairs

Update matching pairs when:

- a theme should have a different icon theme
- a new common pair is needed
- a light theme needs light icons
- a dark theme needs dark icons
- a high-contrast theme needs a clearer icon pairing

## Time-Of-Day Theme Switching

Time-of-day switching picks a theme based on the current hour.

It is opt-in.

It does not run automatically until a person turns it on.

It does not change code.

It writes workspace settings only.

If no folder or workspace is open, the command shows a warning and does not change anything.

### What It Changes

Time-of-day switching changes:

- `workbench.colorTheme`
- `workbench.iconTheme`

It also reads these Pixels to Punk settings:

- `pixelsToPunk.timeOfDay.enabled`
- `pixelsToPunk.timeOfDay.dayStartHour`
- `pixelsToPunk.timeOfDay.eveningStartHour`
- `pixelsToPunk.timeOfDay.nightStartHour`
- `pixelsToPunk.timeOfDay.dayTheme`
- `pixelsToPunk.timeOfDay.eveningTheme`
- `pixelsToPunk.timeOfDay.nightTheme`
- `pixelsToPunk.timeOfDay.dayIconTheme`
- `pixelsToPunk.timeOfDay.eveningIconTheme`
- `pixelsToPunk.timeOfDay.nightIconTheme`

### Default Pairings

| Time | Starts | Color Theme | Icon Theme |
| --- | --- | --- | --- |
| Day | 7 AM | Pixels to Punk Soft Focus Day | Pixels to Punk Cyber Icons Light |
| Evening | 5 PM | Pixels to Punk Rainy Arcade | Pixels to Punk Cyber Icons |
| Night | 9 PM | Pixels to Punk CRT After Midnight | Pixels to Punk Cyber Icons |

### How People Use It

To turn on automatic switching:

```text
Pixels to Punk: Enable Time-of-Day Switching
```

To apply the right theme once:

```text
Pixels to Punk: Apply Current Time-of-Day Theme
```

To turn off automatic switching:

```text
Pixels to Punk: Disable Time-of-Day Switching
```

### Where To Update It

The switching code lives here:

```text
src/extension.js
```

The command list lives in `package.json` under:

```text
contributes.commands
```

The user settings live in `package.json` under:

```text
contributes.configuration
```

The command activation list lives in `package.json` under:

```text
activationEvents
```

### When To Update It

Update time-of-day switching when:

- the default day theme should change
- the default evening theme should change
- the default night theme should change
- a light pairing needs light icons
- a dark pairing needs dark icons
- the start times need to feel more natural
- users need a clearer on or off command

### Theme Fit Notes

The default day theme uses light icons because it is a light theme.

The default evening and night themes use dark icons because they are dark themes.

If a future default uses a high-contrast theme, check the icon theme too. The pair should be readable, not just colorful.

## Status Bar States

The status bar is the strip at the bottom of VS Code.

It can show different states:

- normal
- no folder open
- debugging
- remote window
- warning
- error
- hover
- active item

This project gives those states clear colors in every theme.

### What It Changes

The status bar builder updates:

- `statusBar.background`
- `statusBar.foreground`
- `statusBar.noFolderBackground`
- `statusBar.noFolderForeground`
- `statusBar.debuggingBackground`
- `statusBar.debuggingForeground`
- `statusBarItem.activeBackground`
- `statusBarItem.activeForeground`
- `statusBarItem.hoverBackground`
- `statusBarItem.remoteBackground`
- `statusBarItem.remoteForeground`
- `statusBarItem.errorBackground`
- `statusBarItem.errorForeground`
- `statusBarItem.warningBackground`
- `statusBarItem.warningForeground`

### Where To Update It

The builder lives here:

```text
scripts/build-status-bar-states.js
```

Run it with:

```sh
npm run build:status-bar-states
```

The release workflows run it before packaging.

### When To Update It

Update status bar states when:

- debug mode is not obvious enough
- warning or error items are hard to read
- remote status blends into the normal status bar
- a light theme needs darker status bar text
- a dark theme needs brighter status bar text
- hover or active items are too subtle

### Theme Fit Notes

The builder picks colors from each theme's own palette.

That keeps neon themes loud, soft themes calmer, and high-contrast themes readable.

## Git Decoration Colors

Git decorations are the colored labels VS Code shows for changed files.

They help people see what happened in a project.

### What It Changes

The Git decoration builder updates:

- `gitDecoration.addedResourceForeground`
- `gitDecoration.modifiedResourceForeground`
- `gitDecoration.deletedResourceForeground`
- `gitDecoration.renamedResourceForeground`
- `gitDecoration.untrackedResourceForeground`
- `gitDecoration.ignoredResourceForeground`
- `gitDecoration.conflictingResourceForeground`
- `gitDecoration.submoduleResourceForeground`
- `gitDecoration.stageModifiedResourceForeground`
- `gitDecoration.stageDeletedResourceForeground`

### Color Meanings

- Added and untracked use green.
- Modified and staged modified use yellow.
- Deleted and staged deleted use red.
- Renamed uses cyan.
- Ignored uses a quiet muted color.
- Conflicts use magenta.
- Submodules use blue or cyan.

### Where To Update It

The builder lives here:

```text
scripts/build-git-decorations.js
```

Run it with:

```sh
npm run build:git-decorations
```

The release workflows run it before packaging.

### When To Update It

Update Git decorations when:

- added files are hard to see
- modified files look too much like warnings
- deleted files do not feel serious enough
- ignored files are too loud
- conflicts are not obvious
- a light theme or dark theme needs better contrast

## Test Terminal Colors

The theme controls terminal colors.

The terminal only shows those colors when a command prints colored text.

This may look plain:

```sh
echo hello
```

That is normal.

To test the terminal colors, run:

```sh
npm run demo:terminal-colors
```

You should see red, yellow, blue, magenta, cyan, white, and bright versions of those colors.

## Build A Local VSIX

Use this when you want to build the install file yourself.

### Step 1: Install Node.js

If you do not have Node.js yet:

1. Go to <https://nodejs.org/>.
2. Download the **LTS** version.
3. Install it.
4. Close VS Code.
5. Open VS Code again.

### Step 2: Install Project Tools

Open the VS Code terminal and run:

```sh
npm install
```

### Step 3: Make The VSIX File

Run:

```sh
npm run package
```

This makes a file that ends with `.vsix`.

Do not run this unless you know why you need it:

```sh
npm audit fix --force
```

That command can make big dependency changes.

The final `.vsix` file does not include `node_modules`.

## Install A Local VSIX

After `npm run package`, run:

```sh
npm run install:vsix
```

That command reads the version from `package.json`, then installs the matching `.vsix` file.

## GitHub Releases

This repo releases from `main`.

When a PR is merged into `main`, **Version and Release VSIX** reads the version in `package.json`.

If that version does not have a GitHub Release yet, the workflow:

1. rebuilds generated theme variants
2. rebuilds generated file icons
3. builds the `.vsix` file
4. creates the `v` tag
5. publishes the GitHub Release

Example:

```text
1.0.6
```

That becomes:

```text
v1.0.6
```

If that release already exists, the workflow exits without publishing another one.

You can also run **Version and Release VSIX** by hand from the GitHub Actions page. The manual run uses the version already in `package.json`.

### Build Only

Use **Build VSIX** when you only want to build the `.vsix` file.

That workflow runs on version tags and can also be run by hand.

The workflow rebuilds generated theme variants and generated file icons before packaging.

## Release Checklist

Use this checklist in a feature PR when the change should create a new release after merge.

1. Open `package.json`.
2. Change the version number.
3. Open `package-lock.json`.
4. Change the root version numbers to match.
5. Run the normal checks:

   ```sh
   npm run build:file-icons
   npm run package
   ```

6. Commit the changes.
7. Open a PR.
8. Merge the PR into `main`.
9. Wait for **Version and Release VSIX** to publish the release.

Example:

```sh
git add .
git commit -m "Bump release to v1.0.6"
git push
```

## If The `code` Command Does Not Work

If the terminal says `code: command not found`:

1. Open the Command Palette with `Command + Shift + P`.
2. Type:

   ```text
   Shell Command
   ```

3. Click **Shell Command: Install 'code' command in PATH**.
4. Try the install command again.

## Keep Learning

The easiest way to learn theme-making is to change one color at a time.

Good first colors to try:

- `editor.background`
- `editor.foreground`
- `sideBar.background`
- `statusBar.background`
- `panel.background`
- `panelTitle.activeBorder`
- `problemsErrorIcon.foreground`
- `debugConsole.infoForeground`
- `terminal.background`
- `terminal.foreground`
- `terminal.ansiCyan`
- `terminal.ansiMagenta`
- `keyword`
- `string`
- `entity.name.function`
