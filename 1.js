var randomBytes = require('randombytes')
var BigInteger = require('bigi')
var ecurve = require('ecurve')
var crypto = require('crypto')
var cs = require('coinstring')
// 4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458
var secp256k1 = ecurve.getCurveByName('secp256k1')
var randombytes = randomBytes(32).toString('hex')
var randombytes = '4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458'
// console.log('randombytes---'+randombytes,randombytes.length)
var privateKey = new Buffer(randombytes, 'hex')
// console.log(privateKey,privateKey.length)
console.log('> privateKey---'+privateKey,privateKey.length)
console.log("> 私钥---" + privateKey.toString('hex'),privateKey.toString('hex').length)

var ecparams = ecurve.getCurveByName('secp256k1')
var curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey))
var x = curvePt.affineX.toBuffer(32)
var y = curvePt.affineY.toBuffer(32)
var publicKey = Buffer.concat([new Buffer([0x04]), x, y])
console.log("> 标准地址---" + publicKey.toString('hex'),publicKey.toString('hex').length)

//compressed
publicKey = curvePt.getEncoded(true) //true forces compressed public key
console.log("> compressed:" + publicKey.toString('hex'),publicKey.toString('hex').length)

var sha = crypto.createHash('sha256').update(publicKey).digest()
var pubkeyHash = crypto.createHash('rmd160').update(sha).digest()

// pubkeyHash of compressed public key
console.log("> pubkeyHash:" + pubkeyHash.toString('hex')) 

// address of compressed public key
console.log("> 压缩地址：" + cs.encode(pubkeyHash, 0x0)) //<-- 0x0 is for public addresses

//这里还缺失校验和Base58编码
console.log('> :'+cs.encode(privateKey, 0x80)) //<--- 0x80 is for private addresses