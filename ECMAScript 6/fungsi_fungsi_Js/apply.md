# apply

> part 1
```javascript
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
const maxMath = Math.max(...numbers);

console.log(max); // 7
console.log(maxMath); // 7
```

> part 2
```javascript
function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
  }
  var args = [1, 2, 3];
  myFunction.apply(null, args.concat(4)); // 10
  myFunction(...args.concat(4)); // 10
  myFunction(...args, 4); // 10
 ```

> part 3
```javascript
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMaxOfArray2(numArray) {
    return Math.max(...numArray);
}

let num = [34, 66, 77, 90];

console.log(getMaxOfArray(num)); // 90
console.log(getMaxOfArray2(num)); // 90
```

