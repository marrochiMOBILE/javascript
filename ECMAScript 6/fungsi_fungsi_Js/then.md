# then 

Method then() mengembalikan Promise. Menggunakan dua argumen: fungsi callback untuk kasus sukses dan gagal pada Promise.

```javascript
p.then(onFulfilled, onRejected);

p.then(function(value) {
   // fulfillment
  }, function(reason) {
  // rejection
});

```

#### onFulfilled
Function dipanggil ketika Promise dipenuhi. Fungsi ini memiliki satu argumen, value pemenuhan.
#### onRejected
Function dipangil ketika Promise ditolak. fungsi ini memiliki satau argumen, alasan penolakan.


```javascript
var p1 = new Promise(function(resolve, reject) {
  resolve("Success!");
  // or
  // reject ("Error!");
});

p1.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});
```