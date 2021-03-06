# envpm

[![Build Status](https://img.shields.io/travis/jarofghosts/envpm.svg?style=flat-square)](https://travis-ci.org/jarofghosts/envpm)
[![npm install](https://img.shields.io/npm/dm/envpm.svg?style=flat-square)](https://www.npmjs.org/package/envpm)
[![npm version](https://img.shields.io/npm/v/envpm.svg?style=flat-square)](https://www.npmjs.org/package/envpm)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/envpm.svg?style=flat-square)](https://github.com/jarofghosts/envpm/blob/master/LICENSE)

easy directory-level configuration scoping for npm

![example](https://cloud.githubusercontent.com/assets/37303/2881041/70d50e1e-d47e-11e3-9848-8ec1ac88f81c.gif)

## installation

`npm install -g envpm`

## usage

`envpm` proxies commands to npm, but (in the event of a `.npmrc` file in your
current working directory or any directory up from that) uses the configuration
information present in that file.

The only command provided by envpm is `which`, used as such:

```bash
envpm which
```

This will print the location to the `.npmrc` that envpm will source if run
from your current working directory.

If you'd like to make `npm` dir aware *all* the time, put the following command
in your `.bashrc`:

```bash
alias npm=envnpm
```

**Important**: Be sure to set a different cache directory in your overridden
`.npmrc` so that your private cache doesn't interfere with your public cache
(and vice versa). Here's an example (minimal) `.npmrc`:

```
registry=http://your.registry/
cache=/full/path/to/.local-cache
```

### as a module

```js
var envpm = require('envpm')

envpm(dir, args) // executes npm with args,
                 // looking for .npmrc file starting in dir
```

## license

MIT
