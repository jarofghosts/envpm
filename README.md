envpm
====

[![Build Status](https://travis-ci.org/jarofghosts/envpm.svg?branch=master)](https://travis-ci.org/jarofghosts/envpm)

easy directory-level registry setting for npm

## installation

`npm install -g envpm`

## usage

`envpm` proxies commands to npm, but (in the event of a `.npm-registry` file in
a root directory) sets the registry accordingly. if `--registry` is set
explicitly in the command, the file check is skipped.

### `.npm-registry` file

just a plaintext file with a fully-qualified url to the npm registry you want
to use for all projects in that directory **and all sub-directories**

### as a module

```js
var envpm = require('envpm')

envpm(dir, args) // executes npm with args,
                 // looking for .npm-registry file starting in dir
```

## license

MIT
