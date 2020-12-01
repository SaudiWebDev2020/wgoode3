function bubble(x) {
    const arr = [...x];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length-i-1; j++) {
            if(parseFloat(arr[j].price) > parseFloat(arr[j+1].price)) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

export default bubble;