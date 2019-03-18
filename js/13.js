let vcn = 0x00;
console.log((vcn & 0xffff))
let hi = (vcn & 0xffff) / 256;
let lo = (vcn & 0xffff) % 256