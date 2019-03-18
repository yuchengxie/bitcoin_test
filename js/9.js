// const bitcoin = require('bitcoinjs-lib');
const wif = require('wif');

// let keyPair = bitcoin.ECPair.makeRandom();
// console.log(keyPair);
// console.log(keyPair.publicKey);
// console.log(keyPair.privateKey);

// 十六进制表示的私钥:
let privateKey = '4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458';
// 对私钥编码:
function toWIF(privateKeyStr) {
    let encoded = wif.encode(
        0x80, // 0x80前缀
        Buffer.from(privateKey, 'hex'), // 转换为字节
        true // 非压缩格式
    );
    let len=(encoded.length).toString(16);
    encoded=len+encoded;
    return encoded;
}
let encoded=toWIF('4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458');
console.log(encoded);
// let encoded = wif.encode(
//     0x80, // 0x80前缀
//     Buffer.from(privateKey, 'hex'), // 转换为字节
//     true // 非压缩格式
// );
// console.log(encoded, encoded.length);

// 打印私钥:
// console.log(keyPair.d);
// // 以十六进制打印:
// console.log(keyPair.d.toHex());
// // 补齐32位:
// console.log(keyPair.d.toHex(32));
