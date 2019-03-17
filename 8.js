
const secureRandom = require('secure-random');
const base58=require('bs58')
const ec = require('elliptic').ec
const ecdsa = new ec('secp256k1')
const sha256 = require('js-sha256');
// let privateKey = secureRandom.randomBuffer(32);
// console.log('> Private key created:', privateKey.toString('hex'),privateKey.toString('hex').length);
const max = Buffer.from('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140', 'hex');
let privateKey;
privateKey = secureRandom.randomBuffer(32);
let hexhuf=hexToBuffer('0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D');
console.log('> hexbuf:',hexhuf,hexhuf.length);
let buf=Buffer.from(hexhuf,'hex');
console.log(buf);

if (Buffer.compare(max, privateKey) < 1) {
    console.log('> Private key hex:', privateKey.toString('hex'),privateKey.toString('hex').length)
    console.log('> Private key:', privateKey,privateKey.length)
}
let privateKeyHash=new Buffer(privateKey,'hex');
console.log('> privateKeyHash:'+privateKeyHash,privateKeyHash.length);
let privateKeyWIF=createPrivateKeyWIF(privateKey);
console.log('> privateKeyWIF:',privateKeyWIF,privateKeyWIF.length)
const keys = ecdsa.keyFromPrivate(privateKey);
const publicKey = keys.getPublic('hex');
console.log('> Public key created:', publicKey);


const ripemd160 = require('ripemd160');
let hash = sha256(Buffer.from(publicKey, 'hex'));
let publicKeyHash = new ripemd160().update(Buffer.from(hash, 'hex')).digest();
console.log('> publicKeyHash:', publicKeyHash, publicKeyHash.length);
console.log('> PublicAddress:', createPublicAddress(publicKeyHash), createPublicAddress(publicKeyHash).length);

function createPublicAddress(publicKeyHash) {
    // step 1 - add prefix "00” in hex 
    const step1 = Buffer.from('00' + publicKeyHash.toString('hex'), 'hex');

    // step 2 - create SHA256 hash of step 1 
    const step2 = sha256(step1);

    // step 3 - create SHA256 hash of step 2 
    const step3 = sha256(Buffer.from(step2, 'hex'));

    // step 4 - find the 1st byte of step 3 - save as "checksum” 
    const checksum = step3.substring(0, 8);

    // step 5 - add step 1 + checksum
    const step4 = step1.toString('hex') + checksum;

    // return base 58 encoding of step 5 
    const address = base58.encode(Buffer.from(step4, 'hex')); 
    return address;
}

function createPrivateKeyWIF(privateKey)
 {
   const step1 = Buffer.from('80' + privateKey.toString('hex'), 'hex');
   const step2 = sha256(step1);
   const step3 = sha256(Buffer.from(step2, 'hex')); 
   const checksum = step3.substring(0, 8); 
   const step4 = step1.toString('hex') + checksum; 
   const privateKeyWIF = base58.encode(Buffer.from(step4, 'hex'));
   return privateKeyWIF;
}

function hexToBuffer(str){
    if (str.length!=64) throw Error('必须为32个字节');
    let len=str.length/2;
    let arr=[];
    for(let i=0;i<len;i++){
        arr.push((str[2*i]+str[2*i+1]))
    }
    return arr;
}