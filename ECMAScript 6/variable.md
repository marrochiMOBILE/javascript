# apa itu variabel ?

Variabel adalah sebuah nama yang mewakili sebuah nilai. Variabel bisa diisi dengan berbagai macam nilai seperti string (teks), number (angka), objek, array, dan sebagainya.

# ada berapa jenis variabel ?

Yaitu ada tiga **var**,**let**, dan **const**.

```javascript

var nama = "basho";
let nama2 = "somay";
const nama3 = "mie";

console.log(nama);
console.log(nama2);
console.log(nama3);

```

# apa perbedeaan dari var,let,const?

## var
var sekarang mulai ditinggalkan kenapa? karena menggunakan var bisa meninumbulkan bug. dan beberpa kesalahan yang tidak terduga.


```javascript
var ikan = 'salmon';
var ikan = 'tuna';
console.log(ikan) // tuna
```

Bandingkan


```javascript
let hewan = 'kerbau';
let hewan = 'tupai';
console.log(hewan); // error
```

Oleh sebab itu **var** mulai disarankan untuk ditinggalkan. karena itu adalah sebagian contoh kecil dari kekurangan var. sebagai penggantinya
yaitu **let** dan **const**.

## let
let penggantinya var dengan valuenya bisa di ubah

```javascript
    let bunga = 'mawar';
    bunga = 'bunga matahari';

    console.log(bunga);
```
atau

```javascript
    let bunga = 'bunga';
        bunga += ' matahari';

    console.log(bunga);
```
atau

```javascript
    let bunga ;
        bunga = 'bunga matahari';

    console.log(bunga);
```

atau 
```javascript
    let bunga = 'bunga' ;
        bunga += ' matahari';

    console.log(bunga);
```

## const
const penggantinya var dengan valuenya harus diisi kemudian valuenya tetap, tapi untuk nilai valuenya bisa di ubah dalam keadaan tertentu


```javascript
    const colorCat = 'kuning';
    colorCat = 'merah';
    console.log(colorCat); // error karena nilainya tidak bisa di ubah
```

```javascript
    const colorCat;
    console.log(colorCat); // error karena nilainya tidak diisi
```     

Dan ini salah satu contoh **const yang valuenya bisa di ubah** 

```javascript
    //ARRAY

    const anime = ['naruto','sasuke','kakashi'];
    console.log(anime);

    //merubah nilainya
    anime[0] = 'uzumaki naruto';
    console.log(anime);
```

atau

```javascript
    //OBJECT
    const people = {
        nama : 'marrochi',
        age : 21,
        tinggi : 170,
        lebar : 50
    }

    console.log(people);
    console.log(people.nama);
    console.log(people['tinggi']);

    // valuenya di ubah 
    people.nama = 'ochi eaaa';
    console.log(people);
```

# terus bagaimana membuat nama di variabel ?

**Hal - Hal yang dilarang dalam penamaan variabel**

1) Jangan menggunakan  reserved wordl seperti if,else,switch,null dan lain-lain.
```javascript
let if = 'aaaa';
var else = 'ooo';
const switch = 'sssss';
var null = '0000';
var false = 'true';
let typeof = 'tipe';
//error semua
```

2) Jangan diawali number , tapi untuk number bisa ditengah dan diakhir kata
```javascript
    let 1ikan = 'error';
    let 2ayam = 'error';
    let 3burung = 'error';
```

3) jangan ada tulisan karakter unik yang tidak diperbolehkan 
```javascript
     var !people = 'error';
     var @people = 'error';
     var #people = 'error';
     var %people = 'error';
     var +people = 'error';
     var peo-ple = 'error';
```

4) jangan ada space
```javascript
    const aku dia = 'error';
    const dia pergi = 'error';
```

# contoh data tipe primitive

Primitive data type adalah tipe data yang telah terdefinisi(supported) di suatu bahasa pemrograman. Contohnya pada java adalah byte, short, int, long, char, float , double dan boolean. Contohnya kita membuat variabel yang akan menyimpan umur dari seseorang dan ingin data umur tersebut nantinnya dioperasikan (untuk menghitung tahun lahir) maka akan menggunakan primitive data type integer.

```javascript
// DATA TYPE PRIMITIVE

//---------------- undefined

let name ;
// ---> tapi jika memakai variabel const akan error
console.log(name); 



//---------------- null

let buah = 'fruit';
    buah = null;

console.log(buah);


//---------------- string 
let kata = "jika kau pergi tanpa kembali aku ta\' tau";
let kata2 = "hai'!";
console.log(kata);
console.log(kata2);


//---------------- number
let tinggi = 265;
let lebar = 0.14;
console.log(tinggi);
console.log(lebar);

// boolean

let benar = true;
let salah = false;
console.log(benar);
console.log(salah);
```

## camel notation dan pascal notation

##  ``` let camelNotation; ``` 
> camel notation yaitu penamawaan awal variabel huruf kecil sedangkan untuk pascal notation penamaan awal variabel huruf besar
## ``` let PascalNotation ```