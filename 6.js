const sha256 = require('js-sha256');
const bs58=require('bs58')
var SHA256 = require("crypto-js/sha256");
// 4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458
var p='0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D';
console.log(p.length);
var p80='80'+p+'01';
console.log('p80:',p80,p80.length);
let SHA_256_1=sha256(p80);
let SHA_256_2=sha256(SHA_256_1);
console.log('SHA_256_1:',SHA_256_1,SHA_256_1.length);
console.log('SHA_256_2:',SHA_256_2,SHA_256_2.length);
// let b=bs58.encode(SHA_256_2);
// console.log(b);
let buf=toBuf(SHA_256_2)
console.log('buf:',buf,buf.length);
let c=bs58.encode(buf);
console.log(c);

function toBuf(str){
    let arr=[];
    for(var i=0;i<str.length/2;i++){
        b=str.charAt(2*i)+str.charAt(2*i+1);
        arr.push(b);
    }
    return Buffer.from(arr);
}