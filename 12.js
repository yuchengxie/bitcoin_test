const bip32=require('bip32');


let BIP32=bip32.fromSeed(Buffer.from('098665789900087767'))
let k=BIP32.privateKey;
console.log(k,k.length);
let kstr=bufToString(k);
console.log('> kstr:',kstr,kstr.length);




function bufToString(buf){
    var s=''
    buf.forEach(ele => {
        let tmp=ele.toString(16);
        if(ele.length==1){
            s+='0'+tmp;
        }
        s+=tmp;
    });
    return s;
}



console.log('1112gxQgmt8c6wztvtqLhR3QVoqgPWQpAqT62rQzGzE4AWUgEvTMka'.length);