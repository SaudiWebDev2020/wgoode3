# November 30th Algorithms

## Rotate String

Write a function called `rotate` that given a string and a positive whole number will rotate characters in the string by that number to the right.

```js
function rotate(str, num) {
  let newStr = "";
  // your code here
  return newStr;
}

console.log( rotate("Boris Godunov", 3) );
// should return "novBoris Godu"
```

## Is Rotation

Write a function called `isRotation` that given 2 strings will return true if they are rotations of each other

```js
function isRotation(str1, str2) {
  let theyMatch = true;
  // your code here
  return theyMatch;
}

console.log( isRotation("Bingo", "goBin") );
// should return true
console.log( isRotation("Bingo", "ogniB") );
// should return false
```
