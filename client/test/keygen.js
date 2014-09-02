
var keygen = require('../lib/keygen');
var hasher = require('../lib/hash');
var expect = require('LearnBoost/expect.js');

describe('keygen', function(){
  it('works', function(done){

    keygen({
      salt: 'bill@monstercat.com',
      password: 'mysecretpassword'
    }, done);

  });
});

describe('hasher', function(){
  it('scrypt works', function(done){
    hasher({
      key: 'mysecretpassword',
      salt: 'bill@monstercat.com'
    }, end);

    function end(err, res) {
      console.log(res);
      done(err, res);
    }
  });
});


