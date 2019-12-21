const { execSync } = require("child_process");

console.log(`## DOWNLOADING CM AND STARTING SELENOID`);

execSync(`curl -s https://aerokube.com/cm/bash | bash && ./cm selenoid start`)

console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);