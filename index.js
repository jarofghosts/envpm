var spawn = require('child_process').spawn

var findFile = require('fs-find-root').file
  , which = require('which')

module.exports = envpm

function envpm(dir, args, _exec) {
  var execNpm = _exec || exec

  findFile('.npmrc', dir, run_npm)

  function run_npm(err, found) {
    if(err || !found) return execNpm(args)

    execNpm(args.concat(['--userconfig', found]))
  }
}

function exec(args) {
  var node = which.sync('node')
    , npm = which.sync('npm')

  spawn(node, [npm].concat(args), {stdio: 'inherit'})
}
