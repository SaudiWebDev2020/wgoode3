function radix2( arr ) {
    let temp = [ ...arr ];
    // TODO - find the largest value in the arr
    // determine how many times we need to loop
    let power = Math.ceil(Math.log2(Math.max(...arr)));
    // put the values where 2**power when & with each number give 0 into the zeros
    for(let i=0; i<=power; i++) {
        let zeros = [ ];
        let ones = [ ];
        for(let value of temp) {
            if(value & Math.pow(2, i)) {
                ones.push(value);
            } else {
                zeros.push(value);
            }
        }
        temp = zeros.concat(ones);
    }
    // and the other into the ones
    // keep going until everything is sorted
    return temp;
  }
  const values = [ 13, 1, 33, 55, 98, 4096, 2, 12, 14, 88, 100, 256 ];
  console.log(radix2(values));
  // we should expect back [2, 3, 6, 9, 13, 14, 15]