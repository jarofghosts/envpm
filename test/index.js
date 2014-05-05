var path = require('path')

var envpm = require('../')
  , test = require('tape')

test('finds file in dir', function(t) {
  t.plan(1)

  envpm(
      path.join(__dirname, 'test-dir1')
    , ['install', 'butts@0.0.0']
    , check_exec
  )

  function check_exec(args) {
    t.deepEqual(
      args
    , [
        'install'
      , 'butts@0.0.0'
      , '--userconfig'
      , __dirname + '/test-dir1/.npmrc'
      ]
    )
  }
})

test('prints location if --which specified', function(t) {
  t.plan(1)

   
})
