const core = require("@actions/core");
const exec = require("@actions/exec");
const path = require("path");

// const github = require("@actions/github");

async function run() {
    try {
        console.log(`## STARTING`);
        await exec.exec("pwd");
        await exec.exec("ls");
        await exec.exec("cd .. && ls");
        await exec.exec("sudo " + path.join(__dirname, "index.sh"));
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
