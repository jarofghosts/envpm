var path = require('path')

var test = require('tape')

var envpm = require('../')

test('finds file in dir', function (t) {
  t.plan(1)

  envpm(
    path.join(__dirname, 'test-dir1'),
    ['install', 'butts@0.0.0'],
    checkExec
  )

  function checkExec (args) {
    t.deepEqual(
      args,
      [
        '--userconfig',
        path.join(__dirname, 'test-dir1', '.npmrc'),
        'install',
        'butts@0.0.0'
      ]
    )
  }
})

test('passes through already-set userconfig', function (t) {
  t.plan(1)

  envpm(
    path.join(__dirname, 'test-dir1'),
    ['--userconfig', 'beep', 'install', 'butts@0.0.0'],
    checkExec
  )

  function checkExec (args) {
    t.deepEqual(
      args,
      [
        '--userconfig',
        'beep',
        'install',
        'butts@0.0.0'
      ]
    )
  }
})

test('lists found location for `which`', function (t) {
  t.plan(1)

  envpm(
    path.join(__dirname, 'test-dir1'),
    ['which'],
    null,
    checkFound
  )

  function checkFound (dir) {
    t.equal(dir, path.join(__dirname, 'test-dir1', '.npmrc'))
  }
})
