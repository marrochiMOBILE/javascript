# Math.pow()

``` Mengembalikan bilangan terhadap Pangkat exponent,  yaitu, bilanganeksponen ```

#### ``` Math.pow(bilangan, eksponen)  ```

##### bilangan
Bilangan pokok.
##### eksponen
Eksponen yang digunakan untuk memangkatkan bilangan pokok.

##### contoh 1
```javascript
function raisePower(x,y) {
    return Math.pow(x,y)
 }

 let n1 = '4';
 let n2 = '5';

 console.log(raisePower(parseInt(n1), parseInt(n2)));
```

#### contoh 2
```javascript
let numberThree = 5;
let pangkatFive =  Math.pow(numberThree,5);
console.log(pangkatFive);
```

#### contoh 3
``` menggunakan cara manual ```
```javascript
    let numberThree = 5;
    let pangkatFive =  numberThree ** 5;
    console.log(pangkatFive);
```