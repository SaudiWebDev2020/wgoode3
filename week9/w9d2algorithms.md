# December 7th Algorithms

## Min Heap - insert

Create a `MinHeap` class that stores data in a nearly complete tree. The `MinHeap` should use an array to store values with index `0` kept empty (it will make the math easier) and the smallest value will be stored in index `1`, effectively the root of the tree.

Each value must be larger or equal to its parent, and the parent index will be *half* of its own index. 

```js
let parentIndex = Math.floor(currentIndex / 2);
```

Each value can have up to two children, and they can be found at the `2*i` and `2*i + 1` indexes.

```js
let childIndex1 = 2*currentIndex;
let childIndex2 = 2*currentIndex + 1;
```

Write an insert method.

```js
class MinHeap {
  constructor() {
    this.heap = [null];
  }
  
  insert(value) {
    let currentIndex = this.heap.length;
    this.heap.push(value);
    // your code here
  }
}
```
