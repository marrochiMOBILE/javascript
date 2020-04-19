# Bitwise - Opsioal

#### contoh 1
```javascript
/*
* BITWISE - OPTIONAL
 */

 console.log(1 | 2); // 3
 console.log(8 | 9); // 9
 console.log(1 | 2 | 4); // 7
 /*
 PENJELASAN

 contoh 1

    0000 0001 = 1
    0000 0010 = 2
    ---------- +
    0000 0011 = 3

    0000 1000 = 8
    0000 1001 = 9
    ---------- +
    0000 1001 = 9

    setiap yg diambil adalah salah satu yg bernilai true

  */
 
  console.log("\n\t---------\t\n");

  console.log(1 & 2); // 0
  console.log(8 & 9); // 8
  console.log(1 & 2 & 4) // 0

 /*
 PENJELASAN

 contoh 2

    0000 0001 = 1
    0000 0010 = 2
    ---------- +
    0000 0000 = 0

    0000 1000 = 8
    0000 1001 = 9
    ---------- +
    0000 1000 = 8

    setiap yg diambil adalah dua duanya yg bernilai true yg bernilai true

  */
```