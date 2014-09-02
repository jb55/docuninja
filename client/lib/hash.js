
var triplesec = require('jb55/triplesec@master');
var WordArray = triplesec.WordArray;
var scrypt = triplesec.scrypt;
var SHA256 = triplesec.hash.SHA256;

exports = module.exports = function(opts, done) {
  exports.scrypt(opts, function(err, res){
    if (err) return done(err, res);
    return done(null, exports.hash(res).to_hex())
  })
}

exports.hash = function(words) {
  return new SHA256().finalize(words)
}

exports.scrypt = function(opts, done) {
  err = null
  res = null

  opts.dkLen = opts.len || 32;
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

