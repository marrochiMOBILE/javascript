# substring

Jika kita ingin mengambil potongan dari sebuah string, misalkan code dari teman kita mungkin akan menggunakan cara manual dibawah ini :

```javascript
const name = "abcdecode";
let result = "";

// kenapa i = 5 ? karena kita ingin mengambil dari index ke 5, yakni c.
for (let i = 5; i < name.length; i++) {
  result += name[i];
}

console.log(result); // code
```
Tapi di javascript, kita bisa menggunakan substring

```javascript
let name = 'marrochi';
let cari = name.substring(4, 8);

console.log(cari);//ochi
```