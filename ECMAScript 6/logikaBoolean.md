# Logika Booolean

#### coontoh 1
```javascript
/*
* logika - booolean
 */


 /*
 * AND
 and diwajibkan semua harus benar
  */
 let one = true && true;
 let one2 = true && false;


  /*
 * OR
 and diwajibkan salah satunya harus benar
  */
 let two = true || true;
 let two2 = true || false;

 console.log(one); //true
 console.log(one2); // false
 console.log(two); //true
 console.log(two2); //true

//  ini kebalikanya
console.log(!one); //false
console.log(!one2); //true
```


# logika not boolean

#### contoh 1
```javascript
/*
* logika not boolean
------------------ falesy
false;
null;
0;
"";
NaN;
 */

 let ok = false || 'ok' ;
 console.log(ok);
// kiri false maka nilai belah kanan selain falesy true itu yg ditampilkan


 let ok2 = false || 'ok2' || 3 ;
 console.log(ok2);
//intinya gini jika nilai true sudah ditemukan maka yg seblah kananya akan diabaikan walaupun true


let ok3 = false || '' || NaN || 0 || 'ok3' ;
console.log(ok3);
```