# December 3rd Algorithms

## The Quick Brown Fox

Given a 2-dimensional array of words, return an array of every combination containing a word from each sub-array. The arrays can be of any length.

```js
function allCombinations(words) {
  const combinations = [];
  // your code here
  return combinations;
}

const words = [ ["quick", "lazy"],
                ["brown", "red", "grey"],
                ["fox", "dog"] ];

console.log( allCombinations( words ) );
// should return ["quick brown fox", "quick brown dog", "quick red fox", "quick red dog", "quick grey fox", "quick grey dog", "lazy brown fox", "lazy brown dog", "lazy red fox", "lazy red dog", "lazy grey fox", "lazy grey dog"]
```

**Hint** you may need to consider recursion
