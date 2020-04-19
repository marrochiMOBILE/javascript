# Match.random()
The Math.random() kembali fungsi floating-point, jumlah pseudo-random dalam kisaran 0 kurang dari 1 (termasuk 0, tapi tidak 1) dengan distribusi sekitar seragam atas rentang itu - yang kemudian dapat skala untuk berbagai yang Anda inginkan. Implementasi memilih benih awal untuk algoritma generasi nomor acak; itu tidak dapat dipilih atau direset oleh pengguna.

## nilai pengembalian
Angka mengambang, angka pseudo-acak antara 0(inklusif) dan 1 (eksklusif).

#### contoh 1
```javascript
    console.log(Math.random());
```

#### contoh 2
```javascript
function getRandom(){
    return Math.random();
  }
  console.log(getRandom());
```

#### contoh 3
```Mendapatkan nomor acak antara dua nilai```
Contoh ini mengembalikan angka acak antara nilai yang ditentukan. Nilai yang dikembalikan tidak lebih rendah dari (dan mungkin sama) min, dan kurang dari (dan tidak sama) max.
```javascript
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  console.log(getRandomArbitrary(2, 5));
```

#### contoh 4
```mendapat nilai minimal sama dan tidak mungkin maksimal jika nilai yg dimasukan min 2 dan max 5 maka output di antara 2,3,4 ```
```javascript
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    console.log(getRandomInt(2, 5));
```

#### contoh 5
```nilai minimal dan nilai maksimal ```
```javascript
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
 console.log(getRandomIntInclusive(2, 5));
```