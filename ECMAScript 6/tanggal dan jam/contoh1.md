# Date Object

Dokumentasi dari [mozilla](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Date)

Date di JavaScript agak membingungkan, karena 0 menunjukkan januari dan 11 menunjukkan desember. Jadi, jangan sampai lupa ya!

```javascript
// untuk mencari tau date sekarang
const rightNow = new Date();

// untuk membuat date
const firstDate = new Date('May 23, 1999 00:00:00');
// atau
const secondDate = new Date('1999-12-23T00:00:00');
```

Untuk string literal kita tetap menggunakan angka 1 sampai 12 untuk bulannya, sedangkan untuk number literal kita gunakan angka 0 sampai 11.

```javascript
const thirdDate = new Date(1999, 4, 23);
const thirdDate = new Date(1999, 4, 23, 0, 0, 0);
```

Di dalam vscode, jika kita mengetik new Date(), nanti akan muncul parameter parameter seperti tahunnya dulu, baru kemudian bulan, kemudian tanggal, dan jam, menit, detik dll. Silakan di coba-coba ya.

Jika kita ingin mencari dengan timezone yang sama di tempat kita bisa kita coba seperti ini

```javascript
const firstDate = new Date(Date.UTC(1999, 4, 23));

console.log(firstDate);
```

Yakni menggunakan Date.UTC


# mengambil tanggal dan waktu

#### contoh 
```javascript

     var tanggallengkap = new String();
    var namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    var tgl = new Date();
    var hari = tgl.getDay();
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();
    var jam = tgl.getHours();
    var menit = tgl.getMinutes();
    var detik = tgl.getSeconds();
    tanggallengkap = namahari[hari] + ", " +tanggal + " " + namabulan[bulan] + " " + tahun + "\t" + jam + ":" + menit + ":" + detik;

    console.log(tanggallengkap);


```