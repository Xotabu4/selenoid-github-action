// const core = require("@actions/core");
const { execSync } = require("child_process");
// const path = require("path");

// const github = require("@actions/github");

console.log(`## STARTING`);
// await exec.exec("pwd");
// await exec.exec("ls");
execSync("sudo curl -s https://aerokube.com/cm/bash", {stdio: 'inherit'});
execSync("./cm selenoid start", {stdio: 'inherit'});
