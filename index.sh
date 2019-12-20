#!/bin/bash

sudo curl -s https://aerokube.com/cm/bash | bash \
&& sudo ./cm selenoid start --browsers 'chrome' --last-versions 1