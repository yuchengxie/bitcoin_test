let a='5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ'
let b='1118hfRMRrJMgSCoV9ztyPcjcgcMZ1zThvqRDLUw3xCYkZwwTAbJ5o';
let c='1f5347c0eab007b19229d91e518b85368d8722638b41212a163c5e0c87c1e58adca9639edde77fb94a5d8b151b3f1b84978009e9af27a4fed73c566bc7e9960c'
console.log(a.length);
console.log(b.length);
console.log(c.length);

function toBuffer(hex){
    // var hex = '4dabbaf739e4dfec415fea38f1efdbb67a0786746db3d1063b2339a44fb13458'

    var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    }))
    
    var buffer = typedArray.buffer
    return buffer;
}
let xx=toBuffer('1');
console.log(xx);