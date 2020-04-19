# function
Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.

## 1. Membuat Fungsi dengan Cara Biasa
#### contoh 1
Cara ini paling sering digunakan, terutama buat yang baru belajar Javascript.
```javascript
    function namaFungsi(){
        console.log("Hello World!");
    }

    namaFungsi();
```

## 2. Membuat Fungsi dengan Ekspresi
#### contoh 2
```javascript
    var namaFungsi = function(){
    console.log("Hello World!");
}
namaFungsi();
```
Kita menggunakan variabel, lalu diisi dengan fungsi. Fungsi ini sebenarnya adalah fungsi anonim (anonymous function) atau fungsi tanpa nama.

## 3. Membuat Fungsi dengan Tanda Panah
#### contoh 3
Cara ini sering digunakan di kode Javascript masa kini, karena lebih sederhana. Akan tetapi sulit dipahami bagi pemula. Fungsi ini mulai muncul pada standar ES6.
```javascript
var namaFungsi = () => {
    console.log("Hello World!");
}

// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFungsi2 = () => console.log("Hello World!");

namaFungsi();
namaFungsi2();
```

## 4. Membuat Fungsi dengan Kostruktor
Cara ini sebenarnya tidak direkomendasikan oleh Developer Mozilla, karena terlihat kurang bagus. Soalnya body fungsinya dibuat dalam bentuk string yang dapat mempengaruhi kinerja engine javascript.

```javascript
var namaFungsi = new Function('console.log("Hello World!");');
namaFungsi();
```
## 5. arrow Function
```javascript
const numbers = [-1, -2, 3];

const allPositive = numbers.some(value =>  value >= 0);

console.log(allPositive); // true

```

```javascript
 const cars = [
    { id: 1, name: 'Ferrari' },
    { id: 2, name: 'Lamborghini' },
    { id: 3, name: 'Porsche' },
    { id: 4, name: 'Bugatti' }
  ];
  const car = cars.find(car => car.name === 'Ferrari');
   console.log(car);
```

# contoh contoh

### contoh 1
```html
<!DOCTYPE html>
<html>
<head>
    <script>
    // membuat fungsi
    var sayHello = () => alert("Hello World!");
    </script>
</head>
<body>
    <!-- Memanggil fungsi saat link diklik -->
    <a href="#" onclick="sayHello()">Klik Aku!</a>
</body>
</html>
```

### contoh 2
```javascript
// BERKENALAN DENGAN FUNCTION
// FUNCTION BISA DILAKUKAN BERULANG KALI DENGAN KEBUTUHAN YANG SAMA

// single
function name(namakamu){
    console.log('hai !!   '+namakamu);
}

name("oci");
name("jesika");
name('andre');

// double
function person(nama, umur){
    console.log('hai ! '+nama+' umur kamu '+ umur + ' sangat muda' );
}

person("oci",20);

// return mengembalikan nilai
function nilaiBalik(nilaiA,nilaiB){
    return nilaiA + nilaiB;
}

// mengembalikan nilai
let nilaiReturn = nilaiBalik(9,1);
console.log(nilaiReturn);


// bisa jugha langsung panggil
console.log(nilaiBalik(5,10));
```


#### contoh 3
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Belajar Fungsi di Javascript</title>
</head>
<body>
    <script>
            var dataBarang = [
            "Buku Tulis",
            "Pensil",
            "Spidol"
        ];


        function showBarang(){
            var listBarang = document.getElementById("list-barang");
            // clear list barang
            listBarang.innerHTML = "";

            // cetak semua barang
            for(let i = 0; i < dataBarang.length; i++){
                var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
                var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

                listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";        
            }
        }

        function addBarang(){
            var input = document.querySelector("input[name=barang]");
            dataBarang.push(input.value);
            showBarang();
        }

        function editBarang(id){
            var newBarang = prompt("Nama baru", dataBarang[id]);
            dataBarang[id] = newBarang;
            showBarang();
        }

        function deleteBarang(id){
            dataBarang.splice(id, 1);
            showBarang();
        }

        showBarang();    
    </script>
    
    <fieldset>
        <legend>Input Form</legend>
        <input type="text" name="barang" placeholder="input nama barang..." />
        <input type="button" onclick="addBarang()" value="Tambah" />
    </fieldset>

    <div>
        <ul id="list-barang">
        </ul>
    </div>


</body>
</html>
```

#### contoh 4
``` digabungkan dengan html ```
```html
    <script>
        function validate(obj, lowval, hival) {
        if ((obj.value < lowval) || (obj.value > hival)) {
            alert('Invalid Value!');
        }
        console.log(obj);
        }
        </script>
        <input type="text" name="age" size="3"
        onChange="validate(this, 18, 99)">


        <form name="myForm">
            <p><label>Form name:<input type="text" name="text1" value="Beluga"></label>
            <p><input name="button1" type="button" value="Show Form Name"
                 onclick="this.form.text1.value = this.form.name">
            </p>
        </form>
  ```