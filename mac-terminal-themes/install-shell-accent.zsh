#!/usr/bin/env zsh
set -euo pipefail

usage() {
  print "Usage: $0 dark|light|remove"
}

if (( $# != 1 )); then
  usage
  exit 1
fi

theme="$1"
script_dir="${0:A:h}"
zshrc="${HOME}/.zshrc"
begin_marker="# >>> Pixels to Punk Terminal >>>"
end_marker="# <<< Pixels to Punk Terminal <<<"

case "$theme" in
  dark)
    accent_file="${script_dir}/pixels-to-punk-cyber-dark.zsh"
    ;;
  light)
    accent_file="${script_dir}/pixels-to-punk-cyber-light.zsh"
    ;;
  remove)
    accent_file=""
    ;;
  *)
    usage
    exit 1
    ;;
esac

touch "$zshrc"

tmp_file="$(mktemp)"
awk -v begin="$begin_marker" -v end="$end_marker" '
  $0 == begin { skip = 1; next }
  $0 == end { skip = 0; next }
  skip != 1 { print }
' "$zshrc" > "$tmp_file"

if [[ "$theme" != "remove" ]]; then
  {
    print ""
    print "$begin_marker"
    print "source ${(q)accent_file}"
    print "$end_marker"
  } >> "$tmp_file"
fi

mv "$tmp_file" "$zshrc"

if [[ "$theme" == "remove" ]]; then
  print "Removed Pixels to Punk shell accents from $zshrc"
else
  print "Installed Pixels to Punk Cyber ${theme} shell accents in $zshrc"
  print "Open a new Terminal window, or run: source ~/.zshrc"
fi
