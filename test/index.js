var path = require('path')

var envpm = require('../')
  , test = require('tape')

test('finds file in dir', function(t) {
  t.plan(1)

  envpm(
      path.join(__dirname, 'test-dir1')
    , ['install', 'butts@0.0.0']
    , checkExec
  )

  function checkExec(args) {
    t.deepEqual(
        args
      , [
            'install'
          , 'butts@0.0.0'
          , '--userconfig'
          , path.join(__dirname, 'test-dir1', '.npmrc')
        ]
    )
  }
})

test('lists found location for `which`', function(t) {
  t.plan(1)

  envpm(
      path.join(__dirname, 'test-dir1')
    , ['which']
    , null
    , checkFound
  )

  function checkFound(dir) {
    t.equal(dir, path.join(__dirname, 'test-dir1', '.npmrc'))
  }
})
