const { readFileSync } = require("fs");
const { exec } = require("child_process");

const { dependencies } = JSON.parse(readFileSync("./package.json"));

exec("mkdir packed_modules");

for (const dependency in dependencies) {
  const moduleLocation = `./node_modules/${dependency}`;

  const isScoped = dependency.startsWith("@");
  const packDestination = `${isScoped ? "../" : ""}../../packed_modules`;
  const exitDestination = `${isScoped ? "../" : ""}../../`;

  const command = `cd ${moduleLocation} && npm pack --pack-destination ${packDestination} && cd ${exitDestination}`;

  exec(command);
}
