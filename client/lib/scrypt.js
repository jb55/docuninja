
var triplesec = require('jb55/triplesec@master');
var WordArray = triplesec.WordArray;
var scrypt = triplesec.scrypt;

module.exports = function(opts, done) {
  err = null
  res = null

  opts.dkLen = opts.len
  opts.key = WordArray.from_utf8(opts.key)
  opts.salt = WordArray.from_utf8(opts.salt)

  try {
    scrypt(opts, function(res){
      done(null, res)
    });
  } 
  catch (e) {
    done(err)
  }
}
