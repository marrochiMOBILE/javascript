# S2 arrow function

function biasa yg sering digunakan
```javascript
let mahasiswa = ['marrochi', 'soffa', 'erick']
let jumlahHuruf = mahasiswa.map(function (nama){
    return nama.length;
});

console.log(jumlahHuruf) // 8 5 5
```

sekarang kita coba dengan arrow function
```javascript
let mahasiswa = ['marrochi', 'soffa', 'erick']
let jumlahHuruf = mahasiswa.map(nama => nama.length)


console.log(jumlahHuruf) // 8 5 5
```

kemudian kita pengenya kembalian object 
```javascript
let mahasiswa = ['marrochi', 'soffa', 'erick']
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama,jmlHuruf:nama.length}))


console.log(jumlahHuruf)
// [
//     { nama: 'marrochi', jmlHuruf: 8 },
//     { nama: 'soffa', jmlHuruf: 5 },
//     { nama: 'erick', jmlHuruf: 5 }
//   ]

```
lebih hebat lagi didalam javascript kalian biosa menuliskan seperti ini
```javascript
let mahasiswa = ['marrochi', 'soffa', 'erick']
let jumlahHuruf = mahasiswa.map(nama => ({nama,jmlHuruf:nama.length}))


console.log(jumlahHuruf)
// [
//     { nama: 'marrochi', jmlHuruf: 8 },
//     { nama: 'soffa', jmlHuruf: 5 },
//     { nama: 'erick', jmlHuruf: 5 }
//   ]

```

## lanjut 2
 
 ```javascript
 const Mahasiswa = function(){
    this.nama = "marrochi";
    this.umur = 22;
    this.sayHello = function(){
        console.log(`halo nama saya ${this.nama} umur ${this.umur} tahun`)
    }
}

const ochiG = new Mahasiswa();

console.log(ochiG)
// Mahasiswa { nama: 'marrochi', umur: 22, sayHello: [Function] }
 ```

 rubah ke arrow function
 ```javascript
 const Mahasiswa = function(){ // ini tidak bisa dipake awrrow function semena mena karena ini construktor
    this.nama = "marrochi";
    this.umur = 22;
    this.sayHello = () => {
        console.log(`halo nama saya ${this.nama} umur ${this.umur} tahun`)
    }
}

const ochiG = new Mahasiswa();

console.log(ochiG)
// Mahasiswa { nama: 'marrochi', umur: 22, sayHello: [Function] }
 ```

 disini arrow function tidak memiliki konsep this

 ```javascript
 const Profile = {
    nama : "marrochi",
    umur : 22,
    sayHello : function(){
       console.log(`nama saya adalah ${this.nama} dan umur ${this.umur} tahun`)
    }
}


Profile.sayHello() // nama saya adalah marrochi dan umur 22 tahun


const Profile2 = {
    nama : "marrochi",
    umur : 22,
    sayHello : () => {
       console.log(`nama saya adalah ${this.nama} dan umur ${this.umur} tahun`)
    }
}


Profile2.sayHello() // nama saya adalah undefined dan umur undefined tahun

 ```


 coba bandingkan sekali laggi dibawah ini ada 2 contoh  1 arrof functio 1 function biasa 

 ```javascript
 console.log('--------------------------------   1')
const Profile = function() {
    this.nama = "marrochi";
    this.umur = 22;
    setInterval(() => {
        console.log(this.umur++)
    }, 500)

}
let tes = new Profile(); // terus bertambah

//  jangan di run bareng


console.log('--------------------------------   2')
const Profile = function() {
    this.nama = "marrochi";
    this.umur = 22;
    setInterval( function () {
        console.log(this.umur++)
    }, 500)

}
let tes = new Profile(); // Nan
 ```

 
 ## lanjut 3

 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin : 0;
            padding:0 ;
        }

        .box,.box2{
            width: 100px;
            height: 100px;
            border: 1px solid black;
            margin: 50px  auto;
            transition: .3s width, .3s height .3s, .3s margin-top .3s, 1s background-color;
        }

        .size{
            width: 150px;
            height: 150px;
            margin-top: 25px;
        }
        .caption {
            background-color: black;
        }
    </style>
</head>
<body>

    <div class="box"></div>
    <div class="box2"></div>
    <script>
       
       const box = document.querySelector('.box');
       box.addEventListener('click', function(){
           this.classList.toggle('size')
           setTimeout(() => {
               this.classList.toggle('caption')
           }, 600)
       })
       const box2 = document.querySelector('.box2');
       box2.addEventListener('click', function(){
        let satu = 'size'
        let dua = 'caption'

        if(this.classList.contains(satu)){
            [satu, dua] = [dua, satu]
        }
           this.classList.toggle(satu)
           setTimeout(() => {
               this.classList.toggle(dua)
           }, 600)
       })
    </script>
</body>
</html>
 ```