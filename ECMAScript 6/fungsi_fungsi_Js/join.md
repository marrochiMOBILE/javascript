# join
```join``` untuk menjadilan nilai array menjadi string

#### contoh error
```javascript
let tes1 = 'aacdm';
console.log(tes1.join());
```

#### contoh 1
```javascript
let tes3 = ['a', 'a', 'c', 'd', 'm'];
console.log(tes3.join('')); // aacdm
```

#### contoh 2
```javascript
 function myOhay(string){  
      // cara kedua
      let result = string.split('').reverse().join('');
      return result;
    }

    console.log(myOhay("marrochi"));
```

# Joining Array

Di materi string, kita sudah mengenal tentang split, dan kali ini kita akan mencoba menggunakan split lagi.

```javascript
const alpha = 'abcdefg';

const splitted = alpha.split('');

console.log(splitted); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

Nah, split menerima parameter berupa string yang bisa di isi dengan white space misalkan atau tidak diisi maka akan mereturn satu per satu karakter dari string tersebut.

```javascript
const words = 'aku adalah aku';

const splittedWords = words.split(' ');

// ['aku', 'adalah', 'aku']
```

Jika kita ingin split perkata, artinya kita harus menghilangkan white space bukan, jadi passing whitespace di dalam split.

```javascript
const arr = ['aku', 'adalah', 'aku'];
```

Bagaimana cara menggabungkan array di atas ? Kita bisa menggunakan join

```javascript
const arr = ['aku', 'adalah', 'aku'];

const joined = arr.join('-');

console.log(joined); // aku-adalah-aku


```

Join menerima parameter berupa apa yang akan di gunakan untuk menggabungkan value dalam array, bisa white space dan hypen atau comma misalkan.

Ini sangat berguna jika kita ingin membuat sebuah url sebuah website, dalam url kita tidak bisa menggunakan white space bukan ? maka kita harus mengganti white space menjadi hypen

