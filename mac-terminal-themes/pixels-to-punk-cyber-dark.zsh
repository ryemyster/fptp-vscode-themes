# Pixels to Punk Cyber Dark shell accents for macOS Terminal.
# Source this from ~/.zshrc after importing the matching .terminal profile.

export FPTP_TERMINAL_THEME="Pixels to Punk Cyber Dark"

# macOS BSD ls needs color explicitly enabled.
export CLICOLOR=1
# LSCOLORS maps macOS ls item types to ANSI colors:
# directories cyan, symlinks magenta, sockets yellow, pipes magenta,
# executables green, devices blue, elevated executables red/magenta,
# and writable directories cyan/yellow.
export LSCOLORS="GxFxDxFxCxExExBxFxGxDx"

# GNU coreutils/eza-compatible color hints for people who have those installed.
export LS_COLORS="di=1;36:ln=1;35:so=1;32:pi=1;33:ex=1;32:bd=1;34:cd=1;34:su=1;31:sg=1;31:tw=1;36:ow=1;33:*.zip=1;35:*.tar=1;35:*.gz=1;35:*.tgz=1;35:*.xz=1;35:*.7z=1;35:*.js=1;35:*.jsx=1;35:*.ts=1;36:*.tsx=1;36:*.json=1;33:*.md=1;35:*.css=1;36:*.html=1;32:*.sh=1;32:*.env=1;33"

alias ls="ls -G"
alias ll="ls -lhG"
alias la="ls -laG"
alias ltra="ls -ltraG"

export GREP_COLORS="mt=1;35:fn=1;36:ln=1;33:se=36"

autoload -Uz colors && colors
PROMPT="%F{cyan}%n%f %F{magenta}%1~%f %# "
RPROMPT="%F{yellow}%?%f"
