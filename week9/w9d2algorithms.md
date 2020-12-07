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

When we insert a value it should start out by pushing it to the end of the array, then rearranging the array as is needed.

```js
const heap1 = new MinHeap();
heap1.insert(3);
// the heap should look like [null, 3]
```

If we insert a new value it will start at the end and rearrange itself if it is less than its parent.

```js
heap1.insert(5);
heap1.insert(1);
// the heap should look like [null, 1, 5, 3]
```

This rearrangement will look like the following

```
// step 1 - 1 is initially inserted at index `3`

    3
  /   \
5       1

// step 2 - 1 is less than its parent at index `1` so it will swap places

    1
  /   \
5       3
```
