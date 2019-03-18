const bip32=require('bip32')
const bs58=require('bs58');

const a='18800000000123456';
var b=bip32.fromSeed(Buffer.from(a))
var prvKey=b.privateKey;
var pubKey=b.publicKey;
var chainCode=b.chainCode;
var prvKeyHex=t(prvKey);
console.log('> chainCode:',chainCode,chainCode.length);
console.log('> prvKey:',prvKey,prvKey.length);

var bb=bs58.encode(prvKey);
console.log('bb:',bb,bb.length);
console.log('bbl:',bb.length);
var cc=bs58.decode(bb);
console.log('cc:',cc,cc.length);
// let node = bip32.fromBase58(bb);
// console.log('node:',node);


console.log('> prvKeyHex:',prvKeyHex,prvKeyHex.length);
console.log('> pubKey:',pubKey,pubKey.length);
var prvKey01=prvKey+0x01;
// console.log('prvKey01:',prvKey01,prvKey01.length);
// var bbb=bs58.encode(prvKey01);
//bbb->buffer
let bbb=new Buffer(33);
let x=Buffer.from('1');
let y=Buffer.concat([prvKey,x]);
console.log('y:',y,y.length);
// for(var i=0;i<prvKey01.length;i++){
//     console.log(prvKey01[i]);
//     bbb[i]=prvKey01[i];
//     // console.log(bbb[i]);
// }


// console.log('bbb:',bbb,bbb.length);
// var prvKey8001=0x80+prvKey01;
// console.log('prvKey8001:',prvKey8001,prvKey8001.length);

// console.log('b.toWIF:',b.toWIF(),b.toWIF().length);

// var x=bip32.fromPrivateKey(prvKey,chainCode);
// var y=x.toWIF()
// console.log(y);


// let node = bip32.fromBase58('xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi')
// console.log("node:",node);




function base58(){
    var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';//OIl
    console.log('ALPHABET.length:',ALPHABET.length);
    var ALPHABET_MAP={};
    var BASE=58;
    for(var i=0;i<ALPHABET.length;i++){
        ALPHABET_MAP[ALPHABET.charAt(i)]=i;
    }
    console.log(ALPHABET_MAP);
}


function t(buf){
    let s=''
   buf.forEach(element => {
       let tmp=element.toString(16);
       if(tmp.length==1){
           tmp='0'+tmp;
       }
       s+=tmp;
   });
   return s;
}
// const BIP=bip32.fromPrivateKey(prvKey,null);


//把私钥以Base58校验和编码格式显示,这种私钥格式被称为钱包导入格式（WIF，Wallet Import Format）
//将buffer转为16进制字符


