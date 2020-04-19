# Object

JavaScript dirancang berdasarkan paradigma berbasis objek sederhana. Objek adalah kumpulan dari properti, dan properti adalah sepasang hubungan antara nama (atau kunci) dan nilai. Nilai properti bisa berupa fungsi, Dalam hal ini properti itu disebut metode. Selain objek yang sudah di tentukan pada peramban, Kamu bisa menentukan objekmu sendiri. Bab ini menjelaskan cara memakai objek, properti, fungsi, dan metode, serta bagaimana cara membuat objekmu sendiri.

Di JavaScript, objek adalah entitas yang mandiri dengan properti dan tipe. Bandingkan dengan cangkir, misalnya. Sebuah cangkir adalah objek dengan banyak properti. Cangkir punya warna, desain, berat, materi bahan, dll. Dengan cara sama, objek JavaScript juga punya banyak properti yang menjelaskan karakteristiknya.

#### contoh 1
```javascript
let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);
```

#### contoh 2
```javascript
let myCar = new Object();
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

console.log(myCar);
```
#### contoh 3
```javascript
let myHonda = {
    color: 'red', 
    wheels: 4, 
    engine: {
        cylinders: 4, 
        size: 2.2
        }
};
myHonda.wheels = Math.random();
console.log(myHonda);
```
#### contoh 4
```javascript
    function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  var mycar = new Car('Eagle', 'Talon TSi', 1993);
  var mycar2 = new Car('Nissan', '300ZX', 1992);
  var mycar3 = new Car('Mazda', 'Miata', 1990);


  console.log(mycar, mycar2, mycar3);
```




  #### contoh 5
  ```javascript
  // BELAJAR OBJECT
const person = {
        nama : 'marrochi',
        age : 21,
        tinggi : 170,
        lebar : 50
};

// semua ditampilkan
console.log(person);

// menampilkan salah satu
console.log(person.nama);
console.log(person['tinggi']);

// merubah nilai properti object 
person.nama = 'ochi eaaa';
console.log(person);

// walaupun const tidak bisa diubah tapi disini bukan mengubah nilainya tapi properti nilainya;
// contoh conts merubah nilainya dan eror
// const person = {
//     nama : 'marrochi thea'
// };
  ```      

  ``` Berikut ilustrasi cara getter dan setter bisa bekerja untuk objek o yang sudah didefinisi user  ```
  ```javascript
  var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25
  ```
