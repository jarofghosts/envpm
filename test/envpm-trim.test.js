var path = require('path')

var envpm = require('../')
  , test = require('tape')

test('finds file in dir', function(t) {
  t.plan(1)

  envpm(
      path.join(__dirname, 'test-dir3')
    , ['install', 'butts@0.0.0']
    , check_exec
  )

  function check_exec(args) {
    t.deepEqual(args, ['install', 'butts@0.0.0', '--registry', 'dangus'])
  }
})
