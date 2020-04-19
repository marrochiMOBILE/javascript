# parseFloat

### ``` parseFloat ``` => convert angka di belakang koma dan juga mengabaikan huruf
### ``` Number ``` => hanya menerima string berupa number, jika ada selain number seperti huruf maka akan mengembalikan NaN (Not a Number)
### ``` parseInt ``` => hanya convert angka asli dan mengabaikan huruf juga angka dibelakang koma 

```javascript
console.log(parseFloat('44.4px')); // 44.4
```

##### bandingkan

```javascript
  console.log(parseInt("42.1px")); // 42
  console.log(Number("42.1px")); // NaN
  console.log(parseFloat("42.1px")); // 42.1
```

