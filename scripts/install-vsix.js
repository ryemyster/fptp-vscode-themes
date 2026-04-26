const { execFileSync } = require("child_process");
const { version } = require("../package.json");

const vsixFile = `pixels-to-punk-cyber-${version}.vsix`;

execFileSync("code", ["--install-extension", vsixFile, "--force"], {
  stdio: "inherit"
});
