
const sha512 = require('js-sha512')
const sha256 = require('js-sha256')
const ripemd160 = require('ripemd160');
let a = sha512('hello');
let bs58=require('bs58')
// console.log(a);

const bip32 = require('bip32')

let BIP32 = bip32.fromSeed(Buffer.from('18800000000123456'));
let prvKeyBuf = BIP32.privateKey;
// console.log(prvKeyBuf,prvKeyBuf.length);

let m = bip32.fromPrivateKey(prvKeyBuf, new Buffer(32));
// console.log(m);
let pubbuf = m.publicKey;
// console.log(pubbuf, pubbuf.length)

let hashbuf = sha512.array(pubbuf);
// console.log('>hashbuf:',hashbuf,hashbuf.length);
let s1 = new ripemd160().update(Buffer.from(hashbuf.slice(0, 32), 'hex')).digest();
console.log(s1, s1.length);

let s2 = new ripemd160().update(Buffer.from(hashbuf.slice(32, 64), 'hex')).digest();
console.log(s2, s2.length);

let vcn = 0x00;
let hi = vcn & 0xffff;

let version = 0x00;
b0=Buffer.from(new Array('0'));
console.log('b0:',b0,b0.length);

let arr = new Array('0', '0');
let b1=Buffer.from(arr);
console.log('b1:',b1,b1.length);

let h = sha256(s1 + s2);
console.log(h,h.length);
let b2=toBuffer(h);
console.log('b2:',b2,b2.length);

let cointype = 0x00;
b3=Buffer.from(new Array('0'));
console.log('b3:',b3,b3.length);

let t = Buffer.concat([b0,b1,b2,b3]);
console.log('t:',t,t.length);


let d=sha256.sha256(t);
console.log(d);


let encoder=bs58.encode(t);
// console.log('> encoder:',encoder,encoder.length);

// let digest=sha256(encoder);
// console.log('> digest:',digest,digest.length);
// let digest2=sha256(digest);
// console.log('> digest2:',digest2,digest2.length);
// let checksum=digest2.substring(0,16);
// console.log('> checksum:',checksum,checksum.length);
// let pre=digest+checksum;
// console.log('> pre:',pre,pre.length);
// let code=bs58.encode(toBuffer(pre));
// console.log('> code:',code,code.length);


function toBuffer(hex) {
    var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
    }))
    var buffer = typedArray.buffer
    buffer = Buffer.from(buffer);
    return buffer;
}


let s='1112gxQgmt8c6wztvtqLhR3QVoqgPWQpAqT62rQzGzE4AWUgEvTMka'
console.log('s:',s,s.length);

// let s1 = new ripemd160().update(Buffer.from(hash.substring(0, 32), 'hex')).digest();
// console.log('> s1:' + s1, s1.length);
// let s2 = new ripemd160().update(Buffer.from(hash.substring(32, 64), 'hex')).digest();
// console.log('> s2:' + s2, s2.length);
// let publicKeyHash = new ripemd160().update(Buffer.from(hash, 'hex')).digest();
