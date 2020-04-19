# arguments

argumen adalah objek seperti array yang dapat diakses di dalam fungsi yang berisi nilai argumen yang diteruskan ke fungsi itu.

```javascript
function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
    console.log(arguments); // 
}
  
  func1(1, 2, 3, 4, 5, 6, 7);
```

bandingkan dengan contoh dibawah ini mungkin anada akan sedikit puasiang ok

```javascript
function containAll(arr){
    for(let k=1; k < arguments.length; k++){
        // console.log(arguments.length) // 8
        let num = arguments[k];

        console.log('\n--------0');
        console.log(num);
        console.log('\n--------1');
        console.log(arr.indexOf(num));
        if(arr.indexOf(num) === -1 ){
            console.log('\n--------- 2');
            console.log(arr.indexOf(num));
            
            return false;
    }   

 }
 return true;
}
//       0,1,2,3,4,5, 6, 7, 8
let x = [2,4,6,7,8,9,10,11,12];


console.log(containAll(x, 10, 11, 12, 2, 4, 7, 9));
// console.log(containAll(x, 6, 4, 9, 17 )); // false
```

1. saat fungsi dipanggil itu terdapat 8 buah parameter
2. walaupun argument membacanya seperti array 7 tapi dibelakangnya ada length yg menjadikan 8
3. liat variabel num disitu dia meminta argument dengan array k saaat ini nilainya k=1 berarti nilai num pertama kali adalah parameter dengan index ke-1 yaitu 10
4. saat `arr.indexOf(num)` berarti dia mencari huruf num sedangkan nilai num sekarang 10 
5. jika nilai num=10 sama dengan  -1 maka masuk dan return false

##### coba bandingkan contoh dibawah ini? tadikan udah dikasih tau

```javascript
function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));
```

