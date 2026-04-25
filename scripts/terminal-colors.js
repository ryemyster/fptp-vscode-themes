const colors = [
  ['black', 30],
  ['red', 31],
  ['green', 32],
  ['yellow', 33],
  ['blue', 34],
  ['magenta', 35],
  ['cyan', 36],
  ['white', 37],
  ['bright black', 90],
  ['bright red', 91],
  ['bright green', 92],
  ['bright yellow', 93],
  ['bright blue', 94],
  ['bright magenta', 95],
  ['bright cyan', 96],
  ['bright white', 97]
];

console.log('\nPixels to Punk terminal color test\n');

for (const [name, code] of colors) {
  console.log(`\x1b[${code}m${name.padEnd(16)} This line uses terminal.ansi${name
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')}\x1b[0m`);
}

console.log('\nPlain terminal text uses terminal.foreground.\n');
