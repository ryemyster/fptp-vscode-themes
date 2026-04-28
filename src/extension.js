const vscode = require("vscode");

const PRESET_SETTINGS = [
  "workbench.colorTheme",
  "workbench.iconTheme",
  "editor.minimap.enabled",
  "editor.stickyScroll.enabled",
  "editor.guides.bracketPairs",
  "editor.bracketPairColorization.enabled",
  "editor.renderWhitespace",
  "editor.cursorBlinking",
  "editor.wordWrap",
  "terminal.integrated.tabs.enabled"
];

const TIME_OF_DAY_NAMESPACE = "pixelsToPunk.timeOfDay";
const TIME_OF_DAY_CHECK_INTERVAL_MS = 15 * 60 * 1000;

const presets = [
  {
    id: "deepWork",
    label: "Deep Work",
    description: "Quiet dark colors with fewer distractions.",
    command: "pixelsToPunk.applyDeepWorkPreset",
    settings: {
      "workbench.colorTheme": "Pixels to Punk Cyber Dark for Those with Glasses",
      "workbench.iconTheme": "pixels-to-punk-cyber-icons",
      "editor.minimap.enabled": false,
      "editor.stickyScroll.enabled": true,
      "editor.guides.bracketPairs": "active",
      "editor.bracketPairColorization.enabled": true,
      "editor.renderWhitespace": "boundary",
      "editor.cursorBlinking": "smooth",
      "editor.wordWrap": "off",
      "terminal.integrated.tabs.enabled": false
    }
  },
  {
    id: "terminalNight",
    label: "Terminal Night",
    description: "CRT colors for shell-heavy night work.",
    command: "pixelsToPunk.applyTerminalNightPreset",
    settings: {
      "workbench.colorTheme": "Pixels to Punk CRT After Midnight",
      "workbench.iconTheme": "pixels-to-punk-cyber-icons",
      "editor.minimap.enabled": false,
      "editor.stickyScroll.enabled": false,
      "editor.guides.bracketPairs": "active",
      "editor.bracketPairColorization.enabled": true,
      "editor.renderWhitespace": "none",
      "editor.cursorBlinking": "phase",
      "editor.wordWrap": "off",
      "terminal.integrated.tabs.enabled": true
    }
  },
  {
    id: "zineShop",
    label: "Zine Shop",
    description: "Warm light colors for docs, notes, and readable edits.",
    command: "pixelsToPunk.applyZineShopPreset",
    settings: {
      "workbench.colorTheme": "Pixels to Punk Zine Shop Window",
      "workbench.iconTheme": "pixels-to-punk-cyber-icons-light",
      "editor.minimap.enabled": false,
      "editor.stickyScroll.enabled": true,
      "editor.guides.bracketPairs": true,
      "editor.bracketPairColorization.enabled": true,
      "editor.renderWhitespace": "selection",
      "editor.cursorBlinking": "smooth",
      "editor.wordWrap": "on",
      "terminal.integrated.tabs.enabled": false
    }
  },
  {
    id: "maximumNeon",
    label: "Maximum Neon",
    description: "The loudest Pixels to Punk coding mood.",
    command: "pixelsToPunk.applyMaximumNeonPreset",
    settings: {
      "workbench.colorTheme": "Pixels to Punk Riot Glow Dark",
      "workbench.iconTheme": "pixels-to-punk-cyber-icons",
      "editor.minimap.enabled": true,
      "editor.stickyScroll.enabled": true,
      "editor.guides.bracketPairs": true,
      "editor.bracketPairColorization.enabled": true,
      "editor.renderWhitespace": "boundary",
      "editor.cursorBlinking": "expand",
      "editor.wordWrap": "off",
      "terminal.integrated.tabs.enabled": true
    }
  },
  {
    id: "lowGlare",
    label: "Low Glare",
    description: "Soft colors for tired eyes and longer sessions.",
    command: "pixelsToPunk.applyLowGlarePreset",
    settings: {
      "workbench.colorTheme": "Pixels to Punk Soft Focus Night",
      "workbench.iconTheme": "pixels-to-punk-cyber-icons",
      "editor.minimap.enabled": false,
      "editor.stickyScroll.enabled": true,
      "editor.guides.bracketPairs": "active",
      "editor.bracketPairColorization.enabled": true,
      "editor.renderWhitespace": "none",
      "editor.cursorBlinking": "smooth",
      "editor.wordWrap": "bounded",
      "terminal.integrated.tabs.enabled": false
    }
  },
  {
    id: "lowGlareLight",
    label: "Low Glare Light",
    description: "Soft light colors for tired eyes and daylight sessions.",
    command: "pixelsToPunk.applyLowGlareLightPreset",
    settings: {
      "workbench.colorTheme": "Pixels to Punk Soft Focus Day",
      "workbench.iconTheme": "pixels-to-punk-cyber-icons-light",
      "editor.minimap.enabled": false,
      "editor.stickyScroll.enabled": true,
      "editor.guides.bracketPairs": "active",
      "editor.bracketPairColorization.enabled": true,
      "editor.renderWhitespace": "none",
      "editor.cursorBlinking": "smooth",
      "editor.wordWrap": "bounded",
      "terminal.integrated.tabs.enabled": false
    }
  }
];

const timeOfDayParts = [
  {
    id: "day",
    label: "Day",
    themeSetting: "dayTheme",
    iconThemeSetting: "dayIconTheme"
  },
  {
    id: "evening",
    label: "Evening",
    themeSetting: "eveningTheme",
    iconThemeSetting: "eveningIconTheme"
  },
  {
    id: "night",
    label: "Night",
    themeSetting: "nightTheme",
    iconThemeSetting: "nightIconTheme"
  }
];

const themePairs = [
  {
    id: "cyberDark",
    label: "Cyber Dark",
    description: "Classic dark cyber colors with dark icons.",
    command: "pixelsToPunk.activateCyberDarkPair",
    colorTheme: "Pixels to Punk Cyber Dark",
    iconTheme: "pixels-to-punk-cyber-icons"
  },
  {
    id: "cyberLight",
    label: "Cyber Light",
    description: "Classic light cyber colors with light icons.",
    command: "pixelsToPunk.activateCyberLightPair",
    colorTheme: "Pixels to Punk Cyber Light",
    iconTheme: "pixels-to-punk-cyber-icons-light"
  },
  {
    id: "softFocusDay",
    label: "Soft Focus Day",
    description: "Lower-glare light colors with light icons.",
    command: "pixelsToPunk.activateSoftFocusDayPair",
    colorTheme: "Pixels to Punk Soft Focus Day",
    iconTheme: "pixels-to-punk-cyber-icons-light"
  },
  {
    id: "softFocusNight",
    label: "Soft Focus Night",
    description: "Lower-glare dark colors with dark icons.",
    command: "pixelsToPunk.activateSoftFocusNightPair",
    colorTheme: "Pixels to Punk Soft Focus Night",
    iconTheme: "pixels-to-punk-cyber-icons"
  },
  {
    id: "highContrastDark",
    label: "High Contrast Dark",
    description: "Strong dark readability with dark icons.",
    command: "pixelsToPunk.activateHighContrastDarkPair",
    colorTheme: "Pixels to Punk Original High Contrast",
    iconTheme: "pixels-to-punk-cyber-icons"
  },
  {
    id: "highContrastLight",
    label: "High Contrast Light",
    description: "Strong light readability with light icons.",
    command: "pixelsToPunk.activateHighContrastLightPair",
    colorTheme: "Pixels to Punk Electric Sticker Sheet High Contrast",
    iconTheme: "pixels-to-punk-cyber-icons-light"
  }
];

async function updateSetting(key, value) {
  await vscode.workspace
    .getConfiguration()
    .update(key, value, vscode.ConfigurationTarget.Workspace);
}

async function applyThemePair(pair) {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  await updateSetting("workbench.colorTheme", pair.colorTheme);
  await updateSetting("workbench.iconTheme", pair.iconTheme);

  vscode.window.showInformationMessage(
    `Pixels to Punk ${pair.label} pair applied to workspace settings.`
  );
}

async function pickThemePair() {
  const selection = await vscode.window.showQuickPick(
    themePairs.map((pair) => ({
      label: pair.label,
      description: pair.description,
      pair
    })),
    {
      title: "Pick a Pixels to Punk matching theme pair",
      placeHolder: "Choose a color theme and matching icon theme"
    }
  );

  if (selection) {
    await applyThemePair(selection.pair);
  }
}

async function activateMatchingIconTheme() {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  const currentTheme = vscode.workspace
    .getConfiguration("workbench")
    .get("colorTheme", "");
  const lightThemeWords = ["Light", "Day", "Candy", "Photocopy", "Mall", "Electric", "Zine"];
  const iconTheme = lightThemeWords.some((word) => currentTheme.includes(word))
    ? "pixels-to-punk-cyber-icons-light"
    : "pixels-to-punk-cyber-icons";

  await updateSetting("workbench.iconTheme", iconTheme);
  vscode.window.showInformationMessage(
    "Pixels to Punk matching icon theme applied to workspace settings."
  );
}

function hasWorkspace() {
  return Boolean(vscode.workspace.workspaceFolders);
}

function showOpenWorkspaceMessage() {
  vscode.window.showWarningMessage(
    "Open a folder or workspace first. Pixels to Punk commands only change workspace settings."
  );
}

function getTimeOfDayConfig() {
  return vscode.workspace.getConfiguration(TIME_OF_DAY_NAMESPACE);
}

function getHour(config, key) {
  const value = config.get(key);
  if (typeof value !== "number" || Number.isNaN(value)) {
    return 0;
  }

  return Math.max(0, Math.min(23, Math.floor(value)));
}

function getCurrentTimeOfDayPart(date = new Date()) {
  const config = getTimeOfDayConfig();
  const hour = date.getHours();
  const dayStartHour = getHour(config, "dayStartHour");
  const eveningStartHour = getHour(config, "eveningStartHour");
  const nightStartHour = getHour(config, "nightStartHour");

  if (hour >= nightStartHour || hour < dayStartHour) {
    return timeOfDayParts.find((part) => part.id === "night");
  }

  if (hour >= eveningStartHour) {
    return timeOfDayParts.find((part) => part.id === "evening");
  }

  return timeOfDayParts.find((part) => part.id === "day");
}

function getTimeOfDayTheme(part) {
  const config = getTimeOfDayConfig();

  return {
    colorTheme: config.get(part.themeSetting),
    iconTheme: config.get(part.iconThemeSetting)
  };
}

async function applyTimeOfDayTheme(showMessage = true) {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  const part = getCurrentTimeOfDayPart();
  const { colorTheme, iconTheme } = getTimeOfDayTheme(part);

  await updateSetting("workbench.colorTheme", colorTheme);
  await updateSetting("workbench.iconTheme", iconTheme);

  if (showMessage) {
    vscode.window.showInformationMessage(
      `Pixels to Punk ${part.label} theme applied to workspace settings.`
    );
  }
}

async function enableTimeOfDaySwitching() {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  await updateSetting(`${TIME_OF_DAY_NAMESPACE}.enabled`, true);
  await applyTimeOfDayTheme(false);
  vscode.window.showInformationMessage(
    "Pixels to Punk time-of-day switching enabled for this workspace."
  );
}

async function disableTimeOfDaySwitching() {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  await updateSetting(`${TIME_OF_DAY_NAMESPACE}.enabled`, false);
  vscode.window.showInformationMessage(
    "Pixels to Punk time-of-day switching disabled for this workspace."
  );
}

function isTimeOfDaySwitchingEnabled() {
  return Boolean(getTimeOfDayConfig().get("enabled"));
}

function maybeApplyAutomaticTimeOfDayTheme() {
  if (hasWorkspace() && isTimeOfDaySwitchingEnabled()) {
    applyTimeOfDayTheme(false);
  }
}

async function applyPreset(preset) {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  for (const [key, value] of Object.entries(preset.settings)) {
    await updateSetting(key, value);
  }

  vscode.window.showInformationMessage(
    `Pixels to Punk ${preset.label} preset applied to workspace settings.`
  );
}

async function resetPreset() {
  if (!hasWorkspace()) {
    showOpenWorkspaceMessage();
    return;
  }

  for (const key of PRESET_SETTINGS) {
    await updateSetting(key, undefined);
  }

  vscode.window.showInformationMessage(
    "Pixels to Punk mood preset settings cleared from workspace settings."
  );
}

async function pickMoodPreset() {
  const selection = await vscode.window.showQuickPick(
    presets.map((preset) => ({
      label: preset.label,
      description: preset.description,
      preset
    })),
    {
      title: "Pick a Pixels to Punk workspace mood",
      placeHolder: "Choose a preset to apply"
    }
  );

  if (selection) {
    await applyPreset(selection.preset);
  }
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("pixelsToPunk.pickMoodPreset", pickMoodPreset),
    vscode.commands.registerCommand("pixelsToPunk.resetMoodPreset", resetPreset),
    vscode.commands.registerCommand(
      "pixelsToPunk.applyCurrentTimeOfDayTheme",
      () => applyTimeOfDayTheme(true)
    ),
    vscode.commands.registerCommand(
      "pixelsToPunk.enableTimeOfDaySwitching",
      enableTimeOfDaySwitching
    ),
    vscode.commands.registerCommand(
      "pixelsToPunk.disableTimeOfDaySwitching",
      disableTimeOfDaySwitching
    ),
    vscode.commands.registerCommand("pixelsToPunk.pickThemePair", pickThemePair),
    vscode.commands.registerCommand(
      "pixelsToPunk.activateMatchingIconTheme",
      activateMatchingIconTheme
    ),
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration(TIME_OF_DAY_NAMESPACE)) {
        maybeApplyAutomaticTimeOfDayTheme();
      }
    })
  );

  for (const preset of presets) {
    context.subscriptions.push(
      vscode.commands.registerCommand(preset.command, () => applyPreset(preset))
    );
  }

  for (const pair of themePairs) {
    context.subscriptions.push(
      vscode.commands.registerCommand(pair.command, () => applyThemePair(pair))
    );
  }

  maybeApplyAutomaticTimeOfDayTheme();

  const timer = setInterval(
    maybeApplyAutomaticTimeOfDayTheme,
    TIME_OF_DAY_CHECK_INTERVAL_MS
  );
  context.subscriptions.push({ dispose: () => clearInterval(timer) });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
