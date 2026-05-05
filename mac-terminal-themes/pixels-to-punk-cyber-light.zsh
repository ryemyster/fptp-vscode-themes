# Pixels to Punk Cyber Light shell accents for macOS Terminal.
# Source this from ~/.zshrc after importing the matching .terminal profile.

export FPTP_TERMINAL_THEME="Pixels to Punk Cyber Light"

# macOS BSD ls needs color explicitly enabled.
export CLICOLOR=1
# LSCOLORS maps macOS ls item types to ANSI colors:
# directories cyan, symlinks magenta, sockets yellow, pipes magenta,
# executables green, devices blue, elevated executables red/magenta,
# and writable directories cyan/yellow.
export LSCOLORS="gxfxdxfxcxexexbxfxgxdx"

# GNU coreutils/eza-compatible color hints for people who have those installed.
export LS_COLORS="di=36:ln=35:so=32:pi=33:ex=32:bd=34:cd=34:su=31:sg=31:tw=36:ow=33:*.zip=35:*.tar=35:*.gz=35:*.tgz=35:*.xz=35:*.7z=35:*.js=35:*.jsx=35:*.ts=36:*.tsx=36:*.json=33:*.md=35:*.css=36:*.html=32:*.sh=32:*.env=33"

alias ls="ls -G"
alias ll="ls -lhG"
alias la="ls -laG"
alias ltra="ls -ltraG"

export GREP_COLORS="mt=35:fn=36:ln=33:se=36"

autoload -Uz colors && colors
PROMPT="%F{cyan}%n%f %F{magenta}%1~%f %# "
RPROMPT="%F{yellow}%?%f"
