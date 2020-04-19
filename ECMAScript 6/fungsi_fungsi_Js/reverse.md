# reverse()
```reverse ``` untuk mengurutkan secara kelabikan contoh saja kata ```aacdm -> mdcaa``` dalam satu syarat data harus berupa array. 

#### contoh eror
```javascript
let tes1 = 'aacdm';
console.log(tes1.reverse());
```

#### contoh 1
```javascript
let tes3 = ['a', 'a', 'c', 'd', 'm'];
console.log(tes3.reverse()); // ['m', 'd', 'c', 'a', 'a']

```

#### contoh 2
```javascript
let tes1 = 'aacdm';
let tes2 =  tes1.split('').reverse();

console.log(tes1); // aacdm
console.log(tes2); // [ 'a', 'a', 'c', 'd', 'm']


```

#### contoh 3
```javascript
 function myOhay(string){  
      // cara kedua
      let result = string.split('').reverse().join('');
      return result;
    }

    console.log(myOhay("marrochi")); //ihcorram
```