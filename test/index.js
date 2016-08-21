var path = require('path')
var EE = require('events')

var test = require('tape')
var proxyquire = require('proxyquire').noPreserveCache()

var fakeChildProcess = {}
var fakeProcess = {}

test('finds file in dir', function (t) {
  t.plan(1)

  fakeChildProcess.spawn = function checkExec (nodeBin, args) {
    t.deepEqual(
      args.slice(1),
      [
        '--userconfig',
        path.join(__dirname, 'test-dir1', '.npmrc'),
        'install',
        'butts@0.0.0'
      ]
    )

    t.end()

    return new EE()
  }

  var envpm = proxyquire('../', {
    'child_process': fakeChildProcess,
    'process': fakeProcess,
    '@noCallThru': true
  })

  envpm(
    path.join(__dirname, 'test-dir1'),
    ['install', 'butts@0.0.0']
  )
})

test('passes through already-set userconfig', function (t) {
  t.plan(1)

  fakeChildProcess.spawn = function checkExec (nodeBin, args) {
    t.deepEqual(
      args.slice(1),
      [
        '--userconfig',
        'beep',
        'install',
        'butts@0.0.0'
      ]
    )

    t.end()

    return new EE()
  }

  var envpm = proxyquire('../', {
    'child_process': fakeChildProcess,
    'process': fakeProcess,
    '@noCallThru': true
  })

  envpm(
    path.join(__dirname, 'test-dir1'),
    ['--userconfig', 'beep', 'install', 'butts@0.0.0']
  )
})

test('lists found location for `which`', function (t) {
  t.plan(1)

  var envpm = proxyquire('../', {
    'child_process': fakeChildProcess,
    'process': fakeProcess,
    '@noCallThru': true
  })

  envpm(
    path.join(__dirname, 'test-dir1'),
    ['which'],
    checkFound
  )

  function checkFound (dir) {
    t.equal(dir, path.join(__dirname, 'test-dir1', '.npmrc'))
    t.end()
  }
})

test('forwards exit-code', function (t) {
  t.plan(1)

  fakeChildProcess.spawn = function checkExit () {
    var ee = new EE()

    process.nextTick(function () {
      ee.emit('exit', 123)
    })

    return ee
  }

  fakeProcess.exit = function (code) {
    t.equal(code, 123)
    t.end()
  }

  var envpm = proxyquire('../', {
    'child_process': fakeChildProcess,
    'process': fakeProcess,
    '@noCallThru': true
  })

  envpm(path.join(__dirname, 'test-dir1'), ['install', 'butts@1.0.0'])
})
