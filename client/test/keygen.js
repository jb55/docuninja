
var keygen = require('../lib/keygen');
var scrypt = require('../lib/scrypt');
var expect = require('LearnBoost/expect.js');

describe('keygen', function(){
  it('works', function(done){

    keygen({
      salt: 'bill@monstercat.com',
      password: 'mysecretpassword'
    }, done);

  });
});

describe('scrypt', function(){
  it('works', function(done){
    console.log(scrypt);
    scrypt({
      key: 'mysecretpassword',
      salt: 'bill@monstercat.com',
      len: 32
    }, end);

    function end(err, res) {
      console.log(res);
      done(err, res);
    }
  });
});


