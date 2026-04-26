# Quick Start

Use this if you just want the themes.

You do not need to know code.

## Install The Themes

1. Open the [latest download page](https://github.com/ryemyster/fptp-vscode-themes/releases/latest).
2. Find the file that ends with `.vsix`.
3. Download that file.
4. Open VS Code.
5. Click the blocks icon on the left. That is **Extensions**.
6. Click the `...` button near the top.
7. Click **Install from VSIX...**.
8. Pick the `.vsix` file you downloaded.
9. Click **Install**.

That puts the theme pack into VS Code.

## Pick A Color Theme

1. Press `Command + Shift + P`.
2. Type:

   ```text
   Color Theme
   ```

3. Click **Preferences: Color Theme**.
4. Pick any theme that starts with **Pixels to Punk**.

## Pick The File Icons

The extension tries to start with **Pixels to Punk Cyber Icons**.

That is the dark icon theme.

VS Code does not switch icon themes when you switch color themes.

So if you pick a light color theme, you may want to pick the light icon theme yourself.

1. Press `Command + Shift + P`.
2. Type:

   ```text
   File Icon Theme
   ```

3. Click **Preferences: File Icon Theme**.
4. Pick **Pixels to Punk Cyber Icons** for dark themes.
5. Pick **Pixels to Punk Cyber Icons Light** for light themes.

Now your folders and files should have Pixels to Punk icons.

## Optional: Pick A Matching Pair

A matching pair changes the color theme and icon theme together.

That means you do not have to pick them one at a time.

1. Open a project folder in VS Code.
2. Press `Command + Shift + P`.
3. Type:

   ```text
   Pixels to Punk: Pick Matching Theme Pair
   ```

4. Pick a pair.

You can also run direct commands like:

- `Pixels to Punk: Activate Cyber Dark Pair`
- `Pixels to Punk: Activate Cyber Light Pair`
- `Pixels to Punk: Activate Soft Focus Day Pair`
- `Pixels to Punk: Activate Soft Focus Night Pair`
- `Pixels to Punk: Activate High Contrast Dark Pair`
- `Pixels to Punk: Activate High Contrast Light Pair`

If you already picked a color theme and only want the icon theme fixed, run:

```text
Pixels to Punk: Activate Matching Icon Theme
```

## Optional: Pick A Workspace Mood

A mood preset is a shortcut.

It picks a color theme, an icon theme, and a few editor settings for the folder you have open.

It does not change your code.

It only changes VS Code settings for that workspace.

1. Open a project folder in VS Code.
2. Press `Command + Shift + P`.
3. Type:

   ```text
   Pixels to Punk: Pick Workspace Mood Preset
   ```

4. Pick a mood.

The moods are:

- **Deep Work**: quiet dark colors with fewer distractions
- **Terminal Night**: CRT colors for terminal-heavy work
- **Zine Shop**: warm light colors for docs and notes
- **Maximum Neon**: the loudest neon setup
- **Low Glare**: softer colors for tired eyes

To undo a mood preset:

1. Press `Command + Shift + P`.
2. Type:

   ```text
   Pixels to Punk: Reset Workspace Mood Preset
   ```

3. Press Enter.

That clears the settings the mood preset changed.

## Optional: Switch Themes By Time Of Day

Time-of-day switching changes the theme for the folder you have open.

It is off until you turn it on.

It does not change your code.

The default times are:

- **Day** starts at 7 AM: Soft Focus Day with light icons
- **Evening** starts at 5 PM: Rainy Arcade with dark icons
- **Night** starts at 9 PM: CRT After Midnight with dark icons

To turn it on:

1. Open a project folder in VS Code.
2. Press `Command + Shift + P`.
3. Type:

   ```text
   Pixels to Punk: Enable Time-of-Day Switching
   ```

4. Press Enter.

To change the theme right now without turning on automatic switching:

1. Press `Command + Shift + P`.
2. Type:

   ```text
   Pixels to Punk: Apply Current Time-of-Day Theme
   ```

3. Press Enter.

To turn automatic switching off:

1. Press `Command + Shift + P`.
2. Type:

   ```text
   Pixels to Punk: Disable Time-of-Day Switching
   ```

3. Press Enter.

If you want different times or themes, open VS Code Settings and search for:

```text
Pixels to Punk Time Of Day
```

## If The Theme Does Not Show Up

Sometimes VS Code needs a quick refresh.

1. Press `Command + Shift + P`.
2. Type:

   ```text
   Reload Window
   ```

3. Click **Developer: Reload Window**.
4. Try picking the theme again.

## What Changed?

VS Code has new colors.

Your files may have new icons.

Your code did not change.

Your projects did not change.

Only VS Code got new clothes.
