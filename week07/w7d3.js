function combine(a, b) {
    const c = [];
    let [i, j] = [0, 0];
    while(i < a.length && j < b.length)
        a[i] < b[j] ? c.push(a[i++]) : c.push(b[j++]);
    for(; i<a.length; i++)
        c.push(a[i]);
    for(; j<b.length; j++)
        c.push(b[j]);
    return c;
}

// console.log(combine([1,3,6], [2,4,5]));

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    const left = mergeSort(arr.slice(0, arr.length/2));
    const right = mergeSort(arr.slice(arr.length/2), arr.length);
    // console.log(left, right);
    return combine(left, right);
}

console.log(mergeSort([3,6,2,1,7,4,8,5]));