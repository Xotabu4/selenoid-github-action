const { execSync } = require("child_process");
const core = require('@actions/core');

// Empty string by default, which is fine for us
const selenoidStartArgs = core.getInput('selenoid-start-arguments')

console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start ${selenoidStartArgs}`)

console.log(`## SELENOID STARTED`);