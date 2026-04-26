const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const iconsDir = path.join(root, "icons");
const lightIconsDir = path.join(iconsDir, "light");

const iconSpecs = [
  { id: "js", label: "JS", fill: "#FFE05C", ink: "#1B1726" },
  { id: "ts", label: "TS", fill: "#24D9FF", ink: "#08141C" },
  { id: "react", label: "RX", fill: "#9C7BFF", ink: "#111022" },
  { id: "html", label: "H5", fill: "#FF7A45", ink: "#1B0D08" },
  { id: "css", label: "CSS", fill: "#5EA8FF", ink: "#08111E", small: true },
  { id: "json", label: "{}", fill: "#FF36B7", ink: "#240018" },
  { id: "md", label: "MD", fill: "#E8EDF7", ink: "#202235" },
  { id: "shell", label: "$_", fill: "#66F29A", ink: "#06200F" },
  { id: "git", label: "G", fill: "#FF4C6A", ink: "#26070D" },
  { id: "docker", label: "DK", fill: "#24D9FF", ink: "#071820" },
  { id: "yaml", label: "Y", fill: "#FFB15E", ink: "#241406" },
  { id: "python", label: "PY", fill: "#FFE05C", ink: "#15151F" },
  { id: "rust", label: "RS", fill: "#FF7A45", ink: "#1C0C05" },
  { id: "go", label: "GO", fill: "#66F2E8", ink: "#061C1A" },
  { id: "env", label: "ENV", fill: "#66F29A", ink: "#06200F", small: true },
  { id: "config", label: "*", fill: "#A5A8C4", ink: "#101019" },
  { id: "package", label: "PKG", fill: "#FF36B7", ink: "#240018", small: true },
  { id: "readme", label: "RD", fill: "#E8EDF7", ink: "#202235" },
  { id: "license", label: "MIT", fill: "#B8C8D8", ink: "#202235", small: true },
  { id: "github", label: "GH", fill: "#9C7BFF", ink: "#111022" }
];

const languageIds = {
  javascript: "_file_js",
  javascriptreact: "_file_react",
  typescript: "_file_ts",
  typescriptreact: "_file_react",
  html: "_file_html",
  css: "_file_css",
  scss: "_file_css",
  less: "_file_css",
  json: "_file_json",
  jsonc: "_file_json",
  markdown: "_file_md",
  shellscript: "_file_shell",
  dockerfile: "_file_docker",
  yaml: "_file_yaml",
  python: "_file_python",
  rust: "_file_rust",
  go: "_file_go",
  gitignore: "_file_git"
};

const fileExtensions = {
  js: "_file_js",
  cjs: "_file_js",
  mjs: "_file_js",
  jsx: "_file_react",
  ts: "_file_ts",
  mts: "_file_ts",
  cts: "_file_ts",
  tsx: "_file_react",
  html: "_file_html",
  htm: "_file_html",
  css: "_file_css",
  scss: "_file_css",
  sass: "_file_css",
  less: "_file_css",
  json: "_file_json",
  jsonc: "_file_json",
  md: "_file_md",
  markdown: "_file_md",
  sh: "_file_shell",
  bash: "_file_shell",
  zsh: "_file_shell",
  fish: "_file_shell",
  yml: "_file_yaml",
  yaml: "_file_yaml",
  py: "_file_python",
  rs: "_file_rust",
  go: "_file_go",
  env: "_file_env",
  toml: "_file_config",
  ini: "_file_config",
  config: "_file_config",
  lock: "_file_package"
};

const fileNames = {
  ".env": "_file_env",
  ".env.local": "_file_env",
  ".env.example": "_file_env",
  ".env.development": "_file_env",
  ".env.production": "_file_env",
  ".env.test": "_file_env",
  ".gitignore": "_file_git",
  ".gitattributes": "_file_git",
  ".gitmodules": "_file_git",
  "Dockerfile": "_file_docker",
  "dockerfile": "_file_docker",
  "docker-compose.yml": "_file_docker",
  "docker-compose.yaml": "_file_docker",
  "package.json": "_file_package",
  "package-lock.json": "_file_package",
  "npm-shrinkwrap.json": "_file_package",
  "pnpm-lock.yaml": "_file_package",
  "yarn.lock": "_file_package",
  "bun.lockb": "_file_package",
  "README": "_file_readme",
  "README.md": "_file_readme",
  "readme.md": "_file_readme",
  "LICENSE": "_file_license",
  "LICENSE.md": "_file_license",
  "LICENSE.txt": "_file_license",
  "license": "_file_license",
  "license.md": "_file_license",
  "license.txt": "_file_license",
  "tsconfig.json": "_file_ts",
  "jsconfig.json": "_file_js",
  "vite.config.js": "_file_config",
  "vite.config.ts": "_file_config",
  "vitest.config.js": "_file_config",
  "vitest.config.ts": "_file_config",
  "eslint.config.js": "_file_config",
  "eslint.config.mjs": "_file_config",
  "prettier.config.js": "_file_config",
  ".prettierrc": "_file_config",
  ".eslintrc": "_file_config",
  ".github": "_file_github",
  "dependabot.yml": "_file_github",
  "dependabot.yaml": "_file_github"
};

function svg({ label, fill, ink, small }, light = false) {
  const paper = light ? "#FFFDF7" : "#101019";
  const outline = light ? "#007E8C" : "#24D9FF";
  const shadow = light ? "#FF36B7" : "#FF36B7";
  const fontSize = small ? 4 : label.length > 2 ? 4.4 : 5;

  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 2h5l3 3v9H4V2Z" fill="${paper}"/>
  <path d="M9 2v3h3" fill="${fill}" opacity=".55"/>
  <path d="M4 2h5l3 3v9H4V2Z" stroke="${outline}" stroke-opacity="${light ? ".42" : ".5"}"/>
  <path d="M3.5 11.5 12 9.75v3.5L3.5 15v-3.5Z" fill="${shadow}" opacity="${light ? ".28" : ".38"}"/>
  <rect x="3" y="6.5" width="10" height="5.75" rx="1.25" fill="${fill}"/>
  <text x="8" y="10.75" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="${fontSize}" font-weight="800" fill="${ink}">${label}</text>
</svg>
`;
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

function prefixedMappings(source, suffix) {
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => [key, `${value}${suffix}`])
  );
}

function updateTheme(file, suffix, light = false) {
  const theme = readJson(file);

  for (const spec of iconSpecs) {
    const id = `_file_${spec.id}${suffix}`;
    theme.iconDefinitions[id] = {
      iconPath: light ? `./light/file-${spec.id}.svg` : `./file-${spec.id}.svg`
    };
  }

  theme.languageIds = prefixedMappings(languageIds, suffix);
  theme.fileExtensions = prefixedMappings(fileExtensions, suffix);
  theme.fileNames = prefixedMappings(fileNames, suffix);

  writeJson(file, theme);
}

for (const spec of iconSpecs) {
  fs.writeFileSync(path.join(iconsDir, `file-${spec.id}.svg`), svg(spec));
  fs.writeFileSync(path.join(lightIconsDir, `file-${spec.id}.svg`), svg(spec, true));
}

updateTheme(path.join(iconsDir, "pixels-to-punk-cyber-icon-theme.json"), "", false);
updateTheme(path.join(iconsDir, "pixels-to-punk-cyber-light-icon-theme.json"), "_light", true);
