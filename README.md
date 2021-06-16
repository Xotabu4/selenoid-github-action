# selenoid-github-action v2
This action starts selenoid server for your testing needs inside github actions workflow.

This action is built to run selenium webdriver tests (any language, any framework) using Github Actions

Selenoid server is fully compatible with selenium-standalone, and can be used as just drop-in replacement. Full documentation is here: https://aerokube.com/selenoid/latest/

Selenoid is downloaded and configured using CM tool: https://aerokube.com/cm/latest/

## How to use

1) Add it to your job as step like in this example:
```yml
on: [push]

jobs:
  tests:
    runs-on: ubuntu-latest
    name: Run WDIO tests
    steps:
    - name: Start selenoid
      uses: Xotabu4/selenoid-github-action@v1
    - uses: actions/checkout@v1
    - run: npm ci  
    - name: Run tests
      run: npm test
```

2) In your tests, specify selenium-remote url as `http://localhost:4444/wd/hub` , so they will delegate starting of browser to selenoid:

Example for WDIO configuration file:
```js
    hostname: "localhost",
    port: 4444,
    path: "/wd/hub",
    capabilities: [{
        // Selenoid started with 5 parallel browser limit by default
        maxInstances: 5, 
        browserName: "chrome",
    }],
```

3) Start your tests as usual


## Configuration

You can pass arguments for `./cm selenoid start` command using `selenoid-start-arguments` input. For example, here is how you can increase sesssion inactivity timeout:
```yml
    steps:
    - name: Start selenoid
      uses: Xotabu4/selenoid-github-action@v1
      with:
        selenoid-start-arguments: |
          --args "-timeout 60s"
```

Since this action v2, by default only latest chrome is downloaded:

```sh
--browsers 'chrome' --last-versions 1
```
Notice, that when specifying your `selenoid-start-arguments`, this will be overwritten.


List of args (`./cm selenoid start --help`):
```sh
Flags:
  -a, --architecture string       target architecture (drivers only) (default "amd64")
  -g, --args string               additional service arguments (e.g. "-limit 5")
  -w, --browser-env string        override container or driver environment variables (e.g. "KEY1=value1 KEY2=value2")
  -b, --browsers string           semicolon separated list of browser names to process
  -j, --browsers-json string      browsers JSON file to sync with
  -c, --config-dir string         directory to save files (default "C:\\Users\\xotabu4\\.aerokube\\selenoid")
      --disable-logs              start with log saving feature disabled
      --drivers-info string       drivers info JSON data URL (in most cases never need to be set manually) (default "https://raw.githubusercontent.com/aerokube/cm/master/browsers.json")
  -e, --env string                override service environment variables (e.g. "KEY1=value1 KEY2=value2")
  -f, --force                     force action
  -h, --help                      help for start
  -l, --last-versions int         process only last N versions (Docker only) (default 2)
  -n, --no-download               only output config file without downloading images or drivers
  -o, --operating-system string   target operating system (drivers only) (default "windows")
  -p, --port uint16               override listen port (default 4444)
  -q, --quiet                     suppress output
  -r, --registry string           Docker registry to use (default "https://registry.hub.docker.com")
  -z, --shm-size int              add shmSize sized in megabytes (Docker only)
  -t, --tmpfs int                 add tmpfs volume sized in megabytes (Docker only)
  -d, --use-drivers               use drivers mode instead of Docker
      --userns string             override user namespace, similarly to "docker run --userns host ..." (Docker only)
  -v, --version string            desired version; default is latest release (default "latest")
  -s, --vnc                       download containers with VNC support (Docker only)
```

## Example

Project that uses this action:

https://github.com/StartITProtractorJS/9-js-ui-wdio-Xotabu4
