const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const themesDir = path.join(root, "themes");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function pick(colors, ...keys) {
  for (const key of keys) {
    const value = colors[key];
    if (typeof value === "string" && value.startsWith("#")) {
      return value.slice(0, 7);
    }
  }

  return "#24D9FF";
}

function applyGitDecorations(theme) {
  const colors = theme.colors || {};
  const added = pick(colors, "terminal.ansiGreen", "editorGutter.addedBackground");
  const modified = pick(colors, "terminal.ansiYellow", "editorGutter.modifiedBackground");
  const deleted = pick(colors, "terminal.ansiRed", "editorGutter.deletedBackground");
  const renamed = pick(colors, "terminal.ansiCyan", "focusBorder");
  const untracked = pick(colors, "terminal.ansiBrightGreen", "terminal.ansiGreen");
  const ignored = pick(colors, "editorLineNumber.foreground", "descriptionForeground");
  const conflicting = pick(colors, "terminal.ansiMagenta", "activityBarBadge.background");
  const submodule = pick(colors, "terminal.ansiBlue", "terminal.ansiCyan");

  theme.colors = {
    ...colors,
    "gitDecoration.addedResourceForeground": added,
    "gitDecoration.modifiedResourceForeground": modified,
    "gitDecoration.deletedResourceForeground": deleted,
    "gitDecoration.renamedResourceForeground": renamed,
    "gitDecoration.untrackedResourceForeground": untracked,
    "gitDecoration.ignoredResourceForeground": ignored,
    "gitDecoration.conflictingResourceForeground": conflicting,
    "gitDecoration.submoduleResourceForeground": submodule,
    "gitDecoration.stageModifiedResourceForeground": modified,
    "gitDecoration.stageDeletedResourceForeground": deleted
  };
}

for (const fileName of fs.readdirSync(themesDir)) {
  if (!fileName.endsWith("-color-theme.json")) {
    continue;
  }

  const file = path.join(themesDir, fileName);
  const theme = readJson(file);
  applyGitDecorations(theme);
  writeJson(file, theme);
}
