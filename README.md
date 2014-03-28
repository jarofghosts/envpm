envpm
====

easy directory-level registry setting for npm

## installation

`npm install -g envpm`

## usage

`envpm` proxies commands to npm, but (in the event of a `.npm-registry` file in
a root directory) sets the registry accordingly.

### `.npm-registry` file

just a plaintext file with a fully-qualified url to the npm registry you want
to use for all projects in that directory **and all sub-directories**

### as a module

```js
var envpm = require('envpm')

envpm(dir, args)
```

## license

MIT
