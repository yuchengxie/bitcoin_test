var a='1J7mdg5rbQyUHENYdx39WVWK7fsLpEoXZy'
var b='1db3c4fe125941393406ab54bf7effbb6fcb5153780f64f8e5b8b67b6d0a32ac57b03cde1c5025c74fa96c1646bbe0e3199ce3a9e5ba2d3a9a4940249ac331d9'
console.log(a.length);
console.log(b.length);

function stringtoHex(str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += str.charCodeAt(i).toString(16);
    }
    val += "0a"
    console.log(val);
    return val
}

stringtoHex('18800000000123456')



