var spawn = require('child_process').spawn
  , fs = require('fs')

var find_file = require('fs-find-root').file
  , which = require('which')

module.exports = envpm

function envpm(dir, args, _exec) {
  var exec_npm = _exec || exec

  find_file('.npmrc', dir, run_npm)

  function run_npm(err, found) {
    if(err || !found) return exec_npm(args)

    exec_npm(args.concat(['--userconfig', found]))
  }
}

function exec(args) {
  var run_options = {stdio: 'inherit'} 
    , node = which.sync('node')
    , npm = which.sync('npm')

  spawn(node, [npm].concat(args), {stdio: 'inherit'})
}
