# menukar variable

#### contoh 1

```javascript
/*
* MENUKAR VARIABLE
 */

 let A = 8;
 let B = 4;

//  bagaimana cara kita membalikan nilai tersebut?

/*
* cara 1
    kita membayangkan ada segitiga dengan tiga rusuk . dan rusuk itu kita anggap variable;
   
        A

     B     C
    
     nilai A ditampung ke nilai C
     nilai A digani nilai B
     nilai B diganti ke nilai berapa? sedangkan A sudah diganti ke nilai B?
     maka nilai B diganti nilai C yg sebelumnya menampung nilai A
 */

 let C = A;
  A = B;
  B = C;


 /*
 * cara 2
     kembalikan lagi nilai seperti semula
    kita mengedit sedikit cuman agak sulit jika kondisi semakin sulit
  */


  B = B - A;
  A = B + A;

  console.log(A,B);

```