# November 26th Algorithms

## Radix Sort

Write a function called `radixSort` that takes an array and sorts it by starting at the digits in the 1s place and putting each element into a corresponding "bucket" 0-9.

```js
// example array [12, 9, 20, 15, 121, 3]
// looking at the 1s place
let buckets = [ [20], [121], [12], [3], [], [15], [], [], [], [9] ]
// the array then becomes [20, 121, 12, 3, 15, 9]
```


