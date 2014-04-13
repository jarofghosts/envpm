var path = require('path')

var envpm = require('../')
  , test = require('tape')

test('if --registry is set, pass directly through', function(t) {
  t.plan(1)

  envpm(
      path.join(__dirname, 'test-dir3')
    , ['install', 'butts@1.2.3', '--registry', 'a']
    , check_args
  )

  function check_args(args) {
    t.deepEqual(args, ['install', 'butts@1.2.3', '--registry', 'a'])
  }
})
