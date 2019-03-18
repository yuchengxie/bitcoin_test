
String.prototype.format = function() {
    var resultStr = this.toString();
    // 参数为对象
    if(typeof arguments[0] === "object") {
        for(var i in arguments[0]) {
            resultStr = resultStr.replace("{" + i + "}", arguments[0][i]);
        }
    }
    // 多个参数
    else {
        for(var i = 0; i < arguments.length; i ++) {
            resultStr = resultStr.replace("{" + i + "}", arguments[i]);    
        }
    }
    return resultStr;
};


function info(parms){
    console.log('> {0},{1}'.format(parms,parms.length));
}

exports.info=info;
