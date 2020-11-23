// function insertionSort(arr) {
//     for(let i=1; i<arr.length; i++) {
//         for(let j=i; j>0; j--) {
//             if(arr[j] < arr[j-1]) {
//                 [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
//             } else {
//                 break;
//             }
//         }
//     }
//     return arr;
// }

// console.log(insertionSort([3, 4, 1, 2, 5]));

Array.prototype.iSort = function() {
    for(let i=1; i<this.length; i++) {
        for(let j=i; j>0; j--) {
            if(this[j] < this[j-1]) {
                [this[j], this[j-1]] = [this[j-1], this[j]];
            } else {
                break;
            }
        }
    }
    return this;
}

const a = [3, 8, 1, 2, 5];
console.log(a.iSort());