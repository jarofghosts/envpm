envpm
====

[![Build Status](https://travis-ci.org/jarofghosts/envpm.svg?branch=master)](https://travis-ci.org/jarofghosts/envpm)

easy directory-level configuration scoping for npm

## installation

`npm install -g envpm`

## usage

`envpm` proxies commands to npm. in the event of a `.npmrc` file in a root
directory, it uses the configuration information present in that file.

`envpm --which` prints the location of the `.npmrc` that will be used from
your current directory.

### as a module

```js
var envpm = require('envpm')

envpm(dir, args) // executes npm with args,
                 // looking for .npmrc file starting in dir
```

## license

MIT
