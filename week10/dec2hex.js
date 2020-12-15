const hexValues = "0123456789abcdef";

function dec2hex( num ) {

    let res = '';
    let power = Math.floor(Math.log(num) / Math.log(16));

    while(power > 0) {
        res += hexValues[Math.floor(num / Math.pow(16, power))];
        num %= Math.pow(16, power--);
    }

    res += hexValues[num];
    return "0x" + res;

}

console.log(dec2hex(1000));
console.log(dec2hex(4096));