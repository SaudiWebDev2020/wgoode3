function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let inOrder = true;
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                inOrder = false;
            }
        }
        if(inOrder) {
            return arr;
        }
    }
    return arr;
}

console.log(bubbleSort([1,2,3,4,5]));