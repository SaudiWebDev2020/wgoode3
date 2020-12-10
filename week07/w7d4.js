function partition(arr, st, ed) {
    const pV = arr[st];
    let [l, r] = [st, ed];
    while(l < r) {
        // find a value on the left that is larger than the pivot Value
        while(arr[l] < pV) {
            l++;
        }
        // find a value on the right that is smaller than the pivot Value
        while(arr[r] > pV) {
            r--;
        }

        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    return l;
}

const arr = [2,4,1,6,0,5];
// console.log(arr);
// console.log(partition(arr, 0, 5));
// console.log(arr);


function quickSort(arr) {
    function helper(arr, st, ed) {
        if(st >= ed || st < 0 || ed > arr.length-1) {
            return arr;
        }
        let pI = partition(arr, st, ed);
        helper(arr, st, pI-1);
        helper(arr, pI+1, ed);
    }
    helper(arr, 0, arr.length-1);
    return arr;
}

console.log(quickSort(arr));