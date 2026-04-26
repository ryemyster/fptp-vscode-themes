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

function hexToRgb(hex) {
  const value = hex.replace("#", "").slice(0, 6);
  const int = parseInt(value, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255
  };
}

function relativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const values = [r, g, b].map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}

function readableText(background) {
  return relativeLuminance(background) > 0.45 ? "#101019" : "#FFFFFF";
}

function pick(colors, ...keys) {
  for (const key of keys) {
    const value = colors[key];
    if (typeof value === "string" && value.startsWith("#") && value.length >= 7) {
      return value;
    }
  }

  return "#24D9FF";
}

function applyStatusBarStates(theme) {
  const colors = theme.colors || {};
  const normalBackground = pick(colors, "statusBar.background", "activityBar.background");
  const normalForeground = pick(colors, "statusBar.foreground", "foreground");
  const panelBackground = pick(colors, "panel.background", "sideBar.background");
  const accent = pick(colors, "activityBarBadge.background", "focusBorder", "terminal.ansiCyan");
  const debug = pick(colors, "terminal.ansiYellow", "editorWarning.foreground", "statusBar.debuggingBackground");
  const warning = pick(colors, "editorWarning.foreground", "terminal.ansiYellow");
  const error = pick(colors, "editorError.foreground", "terminal.ansiRed");
  const remote = pick(colors, "terminal.ansiBlue", "terminal.ansiCyan", "focusBorder");
  const hover = pick(colors, "list.hoverBackground", "editor.selectionBackground", "button.hoverBackground");

  theme.colors = {
    ...colors,
    "statusBar.background": normalBackground,
    "statusBar.foreground": normalForeground,
    "statusBar.noFolderBackground": panelBackground,
    "statusBar.noFolderForeground": normalForeground,
    "statusBar.debuggingBackground": debug,
    "statusBar.debuggingForeground": readableText(debug),
    "statusBarItem.activeBackground": accent,
    "statusBarItem.activeForeground": readableText(accent),
    "statusBarItem.hoverBackground": hover,
    "statusBarItem.remoteBackground": remote,
    "statusBarItem.remoteForeground": readableText(remote),
    "statusBarItem.errorBackground": error,
    "statusBarItem.errorForeground": readableText(error),
    "statusBarItem.warningBackground": warning,
    "statusBarItem.warningForeground": readableText(warning)
  };
}

for (const fileName of fs.readdirSync(themesDir)) {
  if (!fileName.endsWith("-color-theme.json")) {
    continue;
  }

  const file = path.join(themesDir, fileName);
  const theme = readJson(file);
  applyStatusBarStates(theme);
  writeJson(file, theme);
}
