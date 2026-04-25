# Pixels to Punk Cyber

A neon punk VS Code theme pack inspired by the [From Pixels to Punk](https://www.frompixelstopunk.com/) brand: loud, playful, anime-pop color, punk energy, and enough softness for long coding sessions.

This project is open source and repo-first. It is not published to the VS Code Marketplace.

## Start Here If You Are Not A Developer

You do not need to know code.

Think of this like putting stickers on VS Code.

1. Open the [latest download page](https://github.com/ryemyster/fptp-vscode-themes/releases/latest).
2. Find the file that ends with `.vsix`.
3. Download that file.
4. Open VS Code.
5. Click the blocks icon on the left. That is Extensions.
6. Click the `...` button near the top.
7. Click **Install from VSIX...**.
8. Pick the file you downloaded.
9. Click **Install**.
10. Press `Command + Shift + P`.
11. Type `Color Theme`.
12. Click **Preferences: Color Theme**.
13. Pick a **Pixels to Punk** theme.

That is it. VS Code has new clothes now.

If you just want to use the themes, download the `.vsix` file from the latest GitHub Release and install it in VS Code.

You get seventeen color themes and two icon themes.

| Theme | Mode | What it feels like | Best for |
| --- | --- | --- | --- |
| **Pixels to Punk Cyber Dark** | Dark | The original dark palette: cyan glow, hot pink accents, and crisp blue-black chrome. | The default dark Pixels to Punk look. |
| **Pixels to Punk Cyber Light** | Light | The original light palette: warm paper, teal controls, and punk magenta highlights. | The default light Pixels to Punk look. |
| **Pixels to Punk Cyber Dark for Those with Glasses** | Dark | A researched lower-glare Cyber Dark remix with softened neon, less pure-black contrast shock, and high syntax contrast. | Eye strain, glasses, contacts, long night sessions, and W3C/WCAG-aware readability. |
| **Pixels to Punk Cyber Light for Those with Glasses** | Light | A researched lower-glare Cyber Light remix with a warmer background, reduced white glare, and readable muted accents. | Eye strain, glasses, contacts, bright rooms, and W3C/WCAG-aware readability. |
| **Pixels to Punk Neon Backstage** | Dark | Electric concert-night color with intense cyan, pink, and violet energy. | Maximum cyberpop drama. |
| **Pixels to Punk Basement Flyer** | Dark | A gritty zine-poster palette with worn paper warmth and underground-show reds. | Punk texture without going fully neon. |
| **Pixels to Punk CRT After Midnight** | Dark | Retro terminal glow with teal glass, green phosphor, and late-night amber. | Terminal-heavy work and nostalgic screens. |
| **Pixels to Punk Candy Static** | Light | Bright arcade candy colors with playful pinks, blues, and yellows. | A high-energy light theme. |
| **Pixels to Punk Streetlight Noir** | Dark | Cinematic late-night contrast with streetlight warmth and noir edges. | Dark workspaces that still want atmosphere. |
| **Pixels to Punk Soft Focus Day** | Light | A calmer light palette with lower-glare surfaces and gentler accents. | Eye strain, daylight coding, and softer contrast. |
| **Pixels to Punk Soft Focus Night** | Dark | A lower-luminance dark palette with softer text and less electric glare. | Eye strain, dim rooms, and long night sessions. |
| **Pixels to Punk Rainy Arcade** | Dark | Blue rain, cyan glass, hot pink signage, and arcade-reflection color. | Moody neon without full saturation. |
| **Pixels to Punk Photocopy Riot** | Light | Stark zine-paper contrast with red markup and blue ink. | Print-like light theme energy. |
| **Pixels to Punk Afterparty Aquarium** | Dark | Deep teal nightlife with coral signage and soft green highlights. | Oceanic dark UI with party color. |
| **Pixels to Punk Mall Goth Daydream** | Light | Lavender daylight, dark lipstick accents, and cooled-down neon. | A softer alt-pop light theme. |
| **Pixels to Punk Riot Glow Dark** | Dark | Saturated violet chrome with cyan, neon pink, acid green, and arcade yellow. | The loudest dark theme in the pack. |
| **Pixels to Punk Riot Glow Light** | Light | Bright lavender paper with the same cyan, neon pink, acid green, and arcade yellow punch. | The loudest light theme in the pack. |

The icon themes are **Pixels to Punk Cyber Icons** and **Pixels to Punk Cyber Icons Light**.

### Eye Strain And Accessibility Notes

The glasses/contact-friendly themes and the Soft Focus themes were designed after research into practical screen comfort and accessibility guidance, especially [W3C/WAI low vision needs](https://www.w3.org/TR/low-vision-needs/), [WCAG contrast guidance](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum), and optometry guidance around glare and computer vision strain from the [American Optometric Association](https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome).

The main design choices are:

- reduce glare from pure white or pure black surfaces
- keep normal code text at strong contrast against the editor background
- avoid relying on hue alone for syntax meaning
- soften saturated neon colors while preserving the Cyber identity
- make comments, line numbers, warnings, and errors readable enough for long sessions

These themes are not medical treatment. They are practical color-system variants for people who notice more glare, halos, dryness, or fatigue when coding with glasses or contacts.

If a newly installed theme does not appear in the picker right away, run **Developer: Reload Window** in VS Code, then open **Preferences: Color Theme** again.

The matching folder icons are set as the default icon theme when this extension is installed.

If you already chose a different icon theme before, VS Code may keep your choice. You can still turn these icons on by hand.

## Install From GitHub Releases

Use this if you are not a developer and just want the themes in VS Code.

1. Go to the [Releases page](https://github.com/ryemyster/fptp-vscode-themes/releases).
2. Open the newest release.
3. Download the file that ends in `.vsix`.
4. Open VS Code.
5. Click the **Extensions** icon on the left side.
6. Click the `...` menu at the top of the Extensions panel.
7. Click **Install from VSIX...**.
8. Pick the `.vsix` file you downloaded.
9. Click **Install**.
10. Press `Command + Shift + P`.
11. Type:

   ```text
   Color Theme
   ```

12. Click **Preferences: Color Theme**.
13. Pick any **Pixels to Punk** color theme.
14. Press `Command + Shift + P` again.
15. Type:

   ```text
   File Icon Theme
   ```

16. Click **Preferences: File Icon Theme**.
17. Pick **Pixels to Punk Cyber Icons** or **Pixels to Punk Cyber Icons Light**.

## For Developers

Use this if you want to change the themes, remix them, or test them from source.

## What This Project Is

This folder is a tiny VS Code extension.

The extension does one job: it adds color themes to VS Code.

The important files are:

- `package.json`: tells VS Code that this extension exists.
- `themes/pixels-to-punk-cyber-dark-color-theme.json`: the default dark theme colors.
- `themes/pixels-to-punk-cyber-light-color-theme.json`: the default light theme colors.
- `themes/pixels-to-punk-cyber-dark-for-those-with-glasses-color-theme.json`: lower-glare dark cyber colors with softer accents and stronger reading contrast.
- `themes/pixels-to-punk-cyber-light-for-those-with-glasses-color-theme.json`: warmer light cyber colors with reduced white glare and clearer syntax contrast.
- `themes/pixels-to-punk-neon-backstage-color-theme.json`: electric concert-night colors.
- `themes/pixels-to-punk-basement-flyer-color-theme.json`: gritty zine-poster colors.
- `themes/pixels-to-punk-crt-after-midnight-color-theme.json`: retro terminal glow colors.
- `themes/pixels-to-punk-candy-static-color-theme.json`: bright candy arcade colors.
- `themes/pixels-to-punk-streetlight-noir-color-theme.json`: cinematic late-night colors.
- `themes/pixels-to-punk-soft-focus-day-color-theme.json`: lower-glare light colors for normal room lighting.
- `themes/pixels-to-punk-soft-focus-night-color-theme.json`: lower-luminance dark colors for dimmer rooms.
- `themes/pixels-to-punk-rainy-arcade-color-theme.json`: blue rain, cyan glass, and hot pink arcade glow.
- `themes/pixels-to-punk-photocopy-riot-color-theme.json`: stark zine-paper contrast with red markup and blue ink.
- `themes/pixels-to-punk-afterparty-aquarium-color-theme.json`: deep teal nightlife with coral signage and soft green highlights.
- `themes/pixels-to-punk-mall-goth-daydream-color-theme.json`: lavender daylight, dark lipstick accents, and cooled-down neon.
- `themes/pixels-to-punk-riot-glow-dark-color-theme.json`: saturated violet chrome with cyan, neon pink, acid green, and arcade yellow.
- `themes/pixels-to-punk-riot-glow-light-color-theme.json`: bright lavender paper with the same cyan, neon pink, acid green, and arcade yellow punch.
- `icons/pixels-to-punk-cyber-icon-theme.json`: the matching folder icons.

## Try It Right Now

Use this when you want to test the theme before installing it forever.

1. Open VS Code.
2. Click **File**.
3. Click **Open Folder...**.
4. Pick this folder: `vscode-themes-vibecoded`.
5. Press `F5`.
6. A second VS Code window opens. That second window is called the **Extension Development Host**.
7. In the second window, press:

   ```text
   Command + Shift + P
   ```

8. Type:

   ```text
   Color Theme
   ```

9. Click **Preferences: Color Theme**.
10. Pick any **Pixels to Punk** color theme.
11. Press `Command + Shift + P` again.
12. Type:

   ```text
   File Icon Theme
   ```

13. Click **Preferences: File Icon Theme**.
14. Pick **Pixels to Punk Cyber Icons** for the dark theme or **Pixels to Punk Cyber Icons Light** for the light theme.

That is it. You are now testing your theme.

## Change Colors

The colors live in the `themes` folder.

To change the dark theme:

1. Open `themes/pixels-to-punk-cyber-dark-color-theme.json`.
2. Change one color.
3. Save the file.
4. Go back to the second VS Code window.
5. Run **Developer: Reload Window** from the Command Palette.

To change the light theme:

1. Open `themes/pixels-to-punk-cyber-light-color-theme.json`.
2. Change one color.
3. Save the file.
4. Go back to the second VS Code window.
5. Run **Developer: Reload Window** from the Command Palette.

Colors look like this:

```json
"editor.background": "#101019"
```

The part with `#` is the color.

## Turn On Folder Icons

The color theme changes editor colors.

The file icon theme changes folder icons in the Explorer.

This project tries to turn on **Pixels to Punk Cyber Icons** automatically.

If the folder icons do not change, turn them on by hand:

To turn on the matching folder icons:

1. Press `Command + Shift + P`.
2. Type:

   ```text
   File Icon Theme
   ```

3. Click **Preferences: File Icon Theme**.
4. Pick **Pixels to Punk Cyber Icons** for the dark theme or **Pixels to Punk Cyber Icons Light** for the light theme.

Your folder icons should now use cyber cyan and punk pink.

## Problems, Debug Console, And Output

The bottom panel has tabs like **Terminal**, **Problems**, **Debug Console**, and **Output**.

This theme colors the panel background, active tab underline, warning icons, error icons, info icons, debug messages, and terminal ANSI colors.

Plain text may still look mostly normal. That is expected. VS Code and command-line tools only use special colors when they mark text as an error, warning, info message, success message, or ANSI color.

## Test Terminal Colors

The theme controls the terminal color palette.

But the terminal only shows those colors when a command prints colored text.

That means this kind of output may look plain:

```sh
echo hello
```

That is normal.

To test the terminal colors, run:

```sh
npm run demo:terminal-colors
```

You should see red, green, yellow, blue, magenta, cyan, white, and bright versions of those colors.

If that test is colorful, the theme is working.

If your normal terminal still looks mostly white, that just means your shell prompt or command output is not asking VS Code to use colors yet.

## Make Terminal Folders Colorful

The terminal screenshot may show folder names as plain white because macOS `ls` does not always print colors.

Try this command:

```sh
ls -G
```

If that shows colored folders, you can make it easier with an alias.

Open your shell file:

```sh
open ~/.zshrc
```

Add this line:

```sh
alias ls="ls -G"
```

Then restart the terminal.

Now `ls` should use colors, and VS Code will map those colors through this theme's terminal palette.

To see hidden files too, use:

```sh
ls -laG
```

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

Open the VS Code terminal:

1. Click **Terminal**.
2. Click **New Terminal**.
3. Run this command:

```sh
npm install
```

### Step 3: Make The VSIX File

Run this command:

```sh
npm run package
```

This makes a file named:

```text
pixels-to-punk-cyber-1.0.0.vsix
```

If npm prints warnings about old packages, do not panic.

This project uses the official VS Code packaging tool, and that tool installs helper packages behind the scenes.

Do **not** run this unless you know why you need it:

```sh
npm audit fix --force
```

That command can make big dependency changes.

For this project, `npm audit fix --force` may even try to downgrade the VS Code packaging tool.

That is not helpful.

The final `.vsix` file does **not** include `node_modules`.

That means those npm warnings are about the local build tool, not about the theme files people download.

If npm says there is a newer version of `@vscode/vsce`, that is just the packaging tool saying it has an update available.

You do not need to update it just to build this theme.

### Step 4: Install The Theme Locally

Run this command:

```sh
code --install-extension pixels-to-punk-cyber-1.0.0.vsix --force
```

### Step 5: Turn It On

1. Press `Command + Shift + P`.
2. Type:

   ```text
   Color Theme
   ```

3. Click **Preferences: Color Theme**.
4. Pick any **Pixels to Punk** color theme.
5. Press `Command + Shift + P` again.
6. Type:

   ```text
   File Icon Theme
   ```

7. Click **Preferences: File Icon Theme**.
8. Pick **Pixels to Punk Cyber Icons** for the dark theme or **Pixels to Punk Cyber Icons Light** for the light theme.

## GitHub Releases

This repo has a GitHub Action that builds the `.vsix` file automatically.

You can run it by hand:

1. Open the repo on GitHub.
2. Click **Actions**.
3. Click **Build VSIX**.
4. Click **Run workflow**.

That creates a downloadable workflow artifact.

To publish a real GitHub Release, push a version tag:

```sh
git tag v1.0.0
git push origin v1.0.0
```

The action will build the `.vsix` file and attach it to the GitHub Release for that tag.

## Website Link

Since this is not on the VS Code Marketplace, link people to the repo or the latest release.

Repo link:

```text
https://github.com/ryemyster/fptp-vscode-themes
```

Latest release link:

```text
https://github.com/ryemyster/fptp-vscode-themes/releases/latest
```

Simple website copy:

```html
<a href="https://github.com/ryemyster/fptp-vscode-themes/releases/latest">
  Download the Pixels to Punk VS Code themes
</a>
```

## Update The Theme Later

When you change colors and want a new release:

1. Open `package.json`.
2. Change the version number.

Example:

```json
"version": "1.0.0"
```

3. Run:

```sh
npm run package
```

4. Commit the changes.
5. Tag the commit with the same version.
6. Push the commit and tag.

Example:

```sh
git add .
git commit -m "Release v1.0.0"
git tag v1.0.0
git push origin main
git push origin v1.0.0
```

The GitHub Action will publish the release file.

## If The `code` Command Does Not Work

If the terminal says `code: command not found`, do this:

1. Open the Command Palette with `Command + Shift + P`.
2. Type:

   ```text
   Shell Command
   ```

3. Click **Shell Command: Install 'code' command in PATH**.
4. Try the install command again:

   ```sh
   code --install-extension pixels-to-punk-cyber-1.0.0.vsix --force
   ```

## Tiny Color Map

Dark theme:

- Background: deep midnight purple-black.
- Main text: soft blue-white.
- Keywords: hot punk pink.
- Functions: electric cyan.
- Strings: neon mint.
- Numbers: warm arcade yellow.

Light theme:

- Background: warm off-white.
- Main text: dark ink.
- Keywords: punchy magenta.
- Functions: deep cyan.
- Strings: readable green.
- Numbers: warm amber.

Neon Backstage:

- Background: near-black show-night blue.
- Main text: crisp stage white.
- Keywords: neon pink.
- Functions: sign-glow cyan.
- Strings: hot orange.
- Numbers: marquee yellow.

Basement Flyer:

- Background: charcoal paper.
- Main text: warm off-white.
- Keywords: worn poster red.
- Functions: muted teal.
- Strings: mustard gold.
- Numbers: faded orange.

CRT After Midnight:

- Background: deep blue-green black.
- Main text: phosphor mint.
- Keywords: synth magenta.
- Functions: electric teal.
- Strings: green monitor glow.
- Numbers: amber terminal light.

Candy Static:

- Background: pale lavender-white.
- Main text: dark ink.
- Keywords: bubblegum magenta.
- Functions: arcade blue.
- Strings: clean green.
- Numbers: caramel amber.

Streetlight Noir:

- Background: rain-dark ink.
- Main text: smoky off-white.
- Keywords: dusty rose.
- Functions: steel blue.
- Strings: streetlamp gold.
- Numbers: warm brass.

## Keep Learning

The easiest way to learn theme-making is to change one color at a time.

Good first colors to play with:

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

## License

This project is released under the [MIT License](./LICENSE).

You can use it, copy it, change it, fork it, remix it, and share it. Keep the license notice with copies or substantial portions of the project.
