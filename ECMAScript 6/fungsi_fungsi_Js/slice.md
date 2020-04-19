# slice 
Slice fungsinya hampir sama seperti substring, namun kita bisa mengambil dari belakang

```javascript
let param = 'size';

console.log(param.slice(0)); // size
console.log(param.slice(1)); // ize
console.log(param.slice(2)); // ze
console.log(param.slice(3)); // e

```


```javascript
let name = 'marrochie';
let cari = name.slice(4, 8);
let cari2 = name.slice(4);

console.log(cari);//ochi
console.log(cari2);//ochie
```

> *** dan ini dari berlakangnya ***

```javascript
let name = 'marrochie';
let cari = name.slice(-5, -2);
let cari2 = name.slice(-2);

console.log(cari);//och
console.log(cari2);//ie
```

### mengunakan array
```javascript
const firstArray = [1, 2];
const secondArray = [3, 4];

const thirdArray = firstArray.concat(secondArray); // [1, 2, 3, 4]
const fourthArray = thirdArray.slice(1, 3);

console.log(fourthArray); // [2, 3]
console.log(thirdArray); // [1, 2, 3, 4]

```

# slice part 2

```javascript
function myConcat(separator) {
    // console.log(Array); // [Function: Array]
    // console.log(Array.prototype); // []
    // console.log(Array.prototype.slice.call(arguments)); // [',' , 'sage', 'basil', 'oregano', 'pepper', 'parsley' ]
    // console.log(Array.prototype.slice.call(arguments, 1)); // [ 'sage', 'basil', 'oregano', 'pepper', 'parsley' ]

    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
  }

  
  // returns "elephant; giraffe; lion; cheetah"
  
  
  // returns "sage. basil. oregano. pepper. parsley"

  

console.log(myConcat(', ', 'red', 'orange', 'blue')); // red, orange, blue
console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah')); // elephant; giraffe; lion; cheetah
console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley')); // sage. basil. oregano. pepper. parsley

```