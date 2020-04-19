# parseInt 

### ``` parseInt ``` => hanya convert angka asli dan mengabaikan huruf juga angka dibelakang koma 
### ``` Number ``` => hanya menerima string berupa number, jika ada selain number seperti huruf maka akan mengembalikan NaN (Not a Number)
### ``` parseFloat ``` => convert angka di belakang koma dan juga mengabaikan huruf

```javascript
console.log(parseInt('44.4px'));
```

##### bandingkan

```javascript
  console.log(parseInt("42.1px")); // 42
  console.log(Number("42.1px")); // NaN
  console.log(parseFloat("42.1px")); // 42.1
```

