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
  }
];

async function updateSetting(key, value) {
  await vscode.workspace
    .getConfiguration()
    .update(key, value, vscode.ConfigurationTarget.Workspace);
}

function hasWorkspace() {
  return Boolean(vscode.workspace.workspaceFolders);
}

function showOpenWorkspaceMessage() {
  vscode.window.showWarningMessage(
    "Open a folder or workspace first. Pixels to Punk mood presets only change workspace settings."
  );
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
    vscode.commands.registerCommand("pixelsToPunk.resetMoodPreset", resetPreset)
  );

  for (const preset of presets) {
    context.subscriptions.push(
      vscode.commands.registerCommand(preset.command, () => applyPreset(preset))
    );
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
