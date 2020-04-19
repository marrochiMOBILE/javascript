# indexOf

Index Of adalah cara untuk mencari index darisuatu karakter yang kita ingin cari.

#### cara manual
```javascript
function myIndexOf(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
  }
}

console.log(myIndexOf("marrochi", "a")); // 1
```
dengan fungsi indexOf

```javascript
const index = 'abc';

const cari = index.indexOf("c");

console.log(cari); // 2
//karena indexOf dimulai dari nol
```

> lihat contoh 3 dibawah ini

```javascript
const alpha = ['a', 'b', 'c', 'd', 'e', 'a', 'b'];

const indexOfA = alpha.indexOf('a');
const lastIndexOfA = alpha.lastIndexOf('a');
const includesA = alpha.includes('a');

console.log(indexOfA); // 0
console.log(lastIndexOfA); // 5
console.log(includesA); // true
```

indexOf akan mereturn index yang mempunyai value yang sama dengan parameter pertama dan yang pertama kali di temukan, jika tidak ada value yang sama maka akan mereturn **-1**

> contoh 4

```javascript
alpha.indexOf(firstParams, secondParams);
```

---

```
firstParams => value yang di cari
secondParams (optional) => index mulai pencarian
```

---

```javascript
const alpha = ['a', 'b', 'c', 'd', 'e', 'a', 'b'];

const indexOfA = alpha.indexOf('a', 3);

console.log(indexOfA); // 5
```

Karena dia akan mencari dari index ke 3.

Jika indexOf akan mereturn yang pertama kali di temukan, maka lastIndexOf akan mereturn yang terakhir kali di temukan.

Lalu bagaimana dengan includes ?

Includes akan mereturn true jika dia menemukan value yang di cari, dan false jika tidak.

Namun kita juga bisa menggunakan indexOf kok, contohnya

```javascript
const alpha = ['a', 'b', 'c', 'd', 'e', 'a', 'b'];

const includeSomething = alpha.indexOf('a') !== -1;

console.log(includeSomething); // true
```

Karena -1 adalah tidak di temukan dan disitu ada tanda !==.

## part 2

> part 2a
```javascript
function containAll(arr){
    for(let k=1; k < arguments.length; k++){
        // console.log(arguments.length)
        let num = arguments[k];
        console.log('\n--------1');
        console.log(arr.indexOf(num));
        if(arr.indexOf(num) === -1 ){
            console.log('\n--------- 2');
            console.log(arr.indexOf(num));
            console.log('\n');
            return false;
    }   

 }
 return true;
}

let x = [2,4,6,7,8,9,10,11,12];
console.log(containAll(x, 2, 4, 7, 9, 10, 11, 12));
console.log(containAll(x, 6, 4, 9, 17 ));

console.log(arguments.length); // 5
```