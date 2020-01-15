const _ = exports;

const _toString = Object.prototype.toString;

/**common**/ 
_.toRawType = val => {
    return _toString.call(val).slice(8, -1);
}

_.isNumber = val => {
    return _toString.call(val) === '[object Number]';
}

_.toNumber = val => {
    let v = parseFloat(val);
    return isNaN(v) ? val : v;
}

_.isObject = obj => {
    return _toString.call(obj) === '[object Object]';
}

_.strClear = str => {
    return str.replace(/[\r\n\s]/g, '');
}

