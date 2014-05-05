envpm
====

[![Build Status](https://travis-ci.org/jarofghosts/envpm.svg?branch=master)](https://travis-ci.org/jarofghosts/envpm)

easy directory-level configuration scoping for npm

![example](https://cloud.githubusercontent.com/assets/37303/2881041/70d50e1e-d47e-11e3-9848-8ec1ac88f81c.gif)

## installation

`npm install -g envpm`

## usage

`envpm` proxies commands to npm, but (in the event of a `.npmrc` file in a directory that contains a `package.json`) uses the configuration information present in that file. If you'd like
to make `npm` cache dir aware *all* the time, put the following command in your 
`.bashrc`:

```bash
alias npm=envnpm
```

**Important**: Be sure to set a different cache directory in your overridden `.npmrc`
so that your private cache doesn't interfere with your public cache (and vice versa). Here's an example (minimal) `.npmrc`:

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
