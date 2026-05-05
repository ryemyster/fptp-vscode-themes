# Pixels to Punk macOS Terminal Themes

This folder contains the macOS Terminal part of the Pixels to Punk experience.

The `.terminal` files are Terminal app profiles. They set the window background, text, cursor, selection, font, and ANSI color palette.

The `.zsh` files are shell accents. They turn on colored `ls`, add matching aliases, set grep highlights, and give zsh a small cyan/magenta prompt.

## Files

- `Pixels to Punk Cyber Dark.terminal`
- `Pixels to Punk Cyber Light.terminal`
- `pixels-to-punk-cyber-dark.zsh`
- `pixels-to-punk-cyber-light.zsh`
- `install-shell-accent.zsh`

## Install

1. Double-click the `.terminal` file you want.
2. In Terminal, open **Terminal > Settings... > Profiles**.
3. Pick the imported Pixels to Punk profile.
4. Click **Default** if you want new windows to use it.
5. Add one shell accent file to `~/.zshrc`.

The easiest way is to run the helper from this folder.

For Cyber Dark:

```sh
./install-shell-accent.zsh dark
```

For Cyber Light:

```sh
./install-shell-accent.zsh light
```

To remove the shell accents later:

```sh
./install-shell-accent.zsh remove
```

You can also add the source line by hand.

For Cyber Dark:

```sh
source /path/to/vscode-themes-vibecoded/mac-terminal-themes/pixels-to-punk-cyber-dark.zsh
```

For Cyber Light:

```sh
source /path/to/vscode-themes-vibecoded/mac-terminal-themes/pixels-to-punk-cyber-light.zsh
```

Open a new Terminal window after changing `~/.zshrc`.

## Why `ls -ltra` Was Plain

The Terminal profile supplies the colors, but `ls` has to ask to use them.

On macOS, that means setting `CLICOLOR=1` or running `ls -G`. The shell accent files do both, so regular commands like `ls -ltra` use the Pixels to Punk ANSI colors.

The key shell settings are:

```sh
export CLICOLOR=1
export LSCOLORS="GxFxDxFxCxExExBxFxGxDx"
alias ls="ls -G"
alias ltra="ls -ltraG"
```

`LSCOLORS` is what tells macOS `ls` which ANSI color to use for each item type. In the dark shell accent, directories use bright cyan, symlinks and pipes use bright magenta, sockets and writable folders get yellow, and executables use green. The light shell accent uses the same item-type choices with the regular ANSI colors so the output stays readable on the warm paper background.
