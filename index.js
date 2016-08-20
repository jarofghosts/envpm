var spawn = require('child_process').spawn
var process = require('process')

var findFile = require('fs-find-root').file
var which = require('which')

module.exports = envpm

function envpm (dir, args, check) {
  if (args.indexOf('--userconfig') > -1) {
    return execNpm(args)
  }

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

function execNpm (args) {
  var node = which.sync('node')
  var npm = which.sync('npm')

  spawn(node, [npm].concat(args), {stdio: 'inherit'})
    .on('exit', function (code) {
      process.exit(code)
    })
}
