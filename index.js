var spawn = require('child_process').spawn
  , fs = require('fs')

var find_file = require('fs-find-root').file

module.exports = envpm

function envpm(dir, args) {
  find_file('.npm-registry', dir, read_file)

  function read_file(err, found) {
    if(err || !found) return exec_npm(args)

    fs.readFile(found, registryize)
  }

  function registryize(err, data) {
    exec_npm(args.concat(['--registry', data.toString().trim()]))
  }
}

function exec_npm(args) {
  spawn('npm', args, {stdio: 'inherit'})
}
