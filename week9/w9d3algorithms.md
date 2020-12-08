# December 8th Algorithms

## Min Heap - remove

Create a `MinHeap` class that stores data in a nearly complete tree. The `MinHeap` should use an array to store values with index `0` kept empty (it will make the math easier) and the smallest value will be stored in index `1`, effectively the root of the tree.

Each child value must be larger or equal to its parent, and the parent index will be *half* of its own index. 

```js
let parentIndex = Math.floor(currentIndex / 2);
```

Each value can have up to two children, and they can be found at the `2*i` and `2*i + 1` indexes.

```js
let leftChildIndex = 2*currentIndex;
let rightChildIndex = 2*currentIndex + 1;
```

Write a remove method.

```js
class MinHeap {
  constructor() {
    this.heap = [null];
  }
  
  remove() {
    let value = this.heap[1];
    // your code here
    return value;
  }
}
```

Remove should always remove the smallest value, and then ensure  smallest remaining value is moved to index `1`. Assuming we have a heap that contains the following values:

```
// this.heap [null, -1, 3, 4, 8, 5, 6] 

        -1
      /    \
    3        4
  /   \    / 
8      5  6
```

When we remove we will want to get back the smallest value, in this case -1, to do this we will swap the values at index `1` and the value at the end of the heap

```
// step 1 - swap the values at index `1` and the end of the array 
// this.heap [null, 6, 3, 4, 8, 5, -1] 

        6
      /   \
    3       4
  /   \    / 
8      5  -1

// step 2 - we can then pop the last value off
// this.heap [null, 6, 3, 4, 8, 5] 

        6
      /   \
    3       4
  /   \    
8      5  

// step 3 - the value at index `1` will now "walk" its way down the tree
// we decide which of its two children is smaller to take its place
// this.heap [null, 3, 6, 4, 8, 5] 

        3
      /   \
    6       4
  /   \    
8      5  

// this process is continued until the value finds its new home
// this.heap [null, 3, 5, 4, 8, 6] 

        3
      /   \
    5       4
  /   \    
8      6 
```


