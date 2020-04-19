# length
Length di gunakan untuk menghitung panjang karakter sebuah variable, berbeda dengan Index yang dimulai dari 0, length dimulai dari 1

#### contoh 1
```javascript
let akhoy = 'akhoy';
console.log(akhoy.length); // output 5

//mengambil angka paling terakhir
console.log(akhoy[akhoy.length - 1 ]); // y

console.log(akhoy[0]); // a
// bisa jugha menggunakan chart art
console.log(akhoy.charAt(0)); // a
```

#### contoh 2
```javascript
// contoh 2
function stringOK(string){
    let result2 = '';
        for(let i = string.length - 1; i >= 0; i-- ){
            result2 += string[i];
        }
        return result2;
}
console.log(stringOK('aku'));
console.log(stringOK('kamu jahat'));
console.log(stringOK('suka suka'));
```

#### contoh 3
```javascript
const anime = ['naruto','sasuke','kakashi'];
// bagaimana cara mengambil kakashi dan yg lainya
let kakashi = anime[anime.length - 1];
let sasuke  = anime[anime.length - 2];
let naruto = anime[anime.length - 3];
let jumlah = anime.length;
console.log(jumlah); // 3
console.log(kakashi,sasuke,naruto);
```

## membaca dengan nama terbalik

```javascript
function myReverse(string) {
    let result = "";
  
    for (let i = string.length - 1; i >= 0; i--) {
      result += string[i];
    }
  
    return result;
  }
  
  console.log(myReverse("marrochi"));
```

#### bisa jugha seperti ini

```javascript
function myOhay(string){  
      // cara kedua
      let result = string.split('').reverse().join('');
      return result;
    }

    console.log(myOhay("marrochi"));
```

