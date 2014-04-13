var spawn = require('child_process').spawn
  , fs = require('fs')

var find_file = require('fs-find-root').file

module.exports = envpm

function envpm(dir, args, _exec) {
  var exec_npm = _exec || exec

  if(args.indexOf('--registry') > -1) return exec_npm(args)

  find_file('.npm-registry', dir, read_file)

  function read_file(err, found) {
    if(err || !found) return exec_npm(args)

    fs.readFile(found, registryize)
  }

  function registryize(err, data) {
    if(err) return exec_npm(args)

    exec_npm(args.concat(['--registry', data.toString().trim()]))
  }
}

function exec(args) {
  spawn('npm', args, {stdio: 'inherit'})
}
