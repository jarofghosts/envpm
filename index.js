var spawn = require('child_process').spawn

var findFile = require('fs-find-root').file
var which = require('which')

module.exports = envpm

function envpm (dir, args, _exec, check) {
  var execNpm = _exec || exec

  findFile('.npmrc', dir, runNpm)

  function runNpm (err, found) {
    if (err || !found) {
      return execNpm(args)
    }

    if (args.length === 1 && args[0] === 'which') {
      return check ? check(found) : console.log(found)
    }

    execNpm(['--userconfig', found].concat(args))
  }
}

function exec (args) {
  var node = which.sync('node')
  var npm = which.sync('npm')

  spawn(node, [npm].concat(args), {stdio: 'inherit'})
}
