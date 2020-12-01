function dedupe(str) {
    let newStr = "";
    let letters = {};
    for(let letter of str) {
        if(!letters[letter]) {
            newStr += letter;
            letters[letter] = true;
        }
    }
    return newStr;
}

console.log(dedupe("Snap, crackle pop!"));