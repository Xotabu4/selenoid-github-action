const core = require("@actions/core");
// const github = require("@actions/github");

async function run() {
    try {
        console.log(`## STARTING`);
        await exec.exec(path.join(__dirname, "index.sh"));
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
