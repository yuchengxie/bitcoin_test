const bip32=require('bip32');

let p='0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D';
let c=toBuf(p);
console.log(c);


function toBuf(str){
    let arr=[];
    for(var i=0;i<str.length/2;i++){
        b=str.charAt(2*i)+str.charAt(2*i+1);
        arr.push(b);
    }
    return Buffer.from(arr);
}