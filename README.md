# selenoid-github-action v1
This action starts selenoid server for your testing needs inside github actions workflow.

Use this action:
- You want to run selenium webdriver tests (any language, any framework) using Github Actions

Selenoid server is fully compatible with selenium-standalone, and can be used as just drop-in replacement. Full documentation is here: https://aerokube.com/selenoid/latest/

Selenoid is downloaded and configured using CM tool: https://aerokube.com/cm/latest/

1) Add it to your job as step like in this example:
```
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

2) In your tests, specify selenium-remote url as http://localhost:4444/wd/hub , so they will delegate starting of browser to selenoid:

Example for WDIO:
```
    hostname: 'localhost',
    port: 4444,
    path: "/wd/hub",
    capabilities: [{
        maxInstances: 5, // 5 parallel threads
        browserName: 'chrome',
    }],
```

3) Start your tests as usual


## This is still BETA, please report any bugs you noticed!

Project that uses this action in CI/CD:
- https://github.com/StartITProtractorJS/9-js-ui-wdio-Xotabu4

Future:
- Allow passing configuration to CM