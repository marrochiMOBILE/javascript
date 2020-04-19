# Execution Context, Hoisting & Scope

### hoisting
adalah langkah pertama yg dia akan mencari semua variabel dan function
### execution context
diakan memulai kan eksekusi dari atas kebawah setelah di hoisting
### scope
scope adalah sebuah batasan

## link visaulizer dary python
http://www.pythontutor.com/javascript.html#mode=edit

## latihan 

### contoh 1
```javascript
   console.log(nama)
  var nama = "ochi ganteng"
```

### contoh 2
```javascript
 console.log(tes())
        var nama = "ochi ganteng"

        function tes(){
            return `hai namaku adalah ${nama}`
        }
```

### contoh 3
```javascript
       var kata1 = "aku"
       var kata2 = "8mZsm9ZQFdY"

       function cetak(kata2){
        var url = "https://www.youtube.com/watch?v="
       return url + kata2;
    }
       function cetak2(){
        var url = "https://www.youtube.com/watch?v="
       return url + kata2;
    }

    console.log(cetak('ebone'))
    console.log(cetak())
    console.log(cetak2())
    console.log(cetak2('jayanti'))
```

### contoh 4
```javascript
function a(){
    console.log('ini a');
    function b(){
        console.log('ini b');
        function c(){
            console.log('ini c')
            function d(){
                console.log('ini d')
            }
            d()
        }
        c()
    }
    b()
}
a()
```

### contoh 5
```javascript
 var kata1 = "aku"
       var kata2 = "8mZsm9ZQFdY"

       function cetak(kata2){
        var url = "https://www.youtube.com/watch?v="
       return url + kata2;
    }
       function cetak2(){
        console.log(arguments[0],arguments[1]) // jayanti amelia
        var url = "https://www.youtube.com/watch?v="
       return url + kata2;
    }

    console.log(cetak('ebone')) // https://www.youtube.com/watch?v=ebone
    console.log(cetak()) // https://www.youtube.com/watch?v=undefined
    console.log(cetak2()) // https://www.youtube.com/watch?v=8mZsm9ZQFdY
    console.log(cetak2('jayanti','amelia')) // https://www.youtube.com/watch?v=8mZsm9ZQFdY
```

### contoh 6
```javascript
function satu(){
            var nama = "eko patrio"
            console.log(nama)
        }
        function dua(){
            console.log(nama)
        }
        console.log(nama)  // undifined
        var nama = 'Erick' 
        satu() // eko patrio
        dua('doddy') // erick
        console.log(nama) // erick
```

### contoh 7
```javascript
            function init(){
                let nama ="ochi" // local variable
                function tampilNama(){ // inner function (closure*)
                    console.log(nama) // akses ke parent
                }
                tampilNama();
            }
            init();

             let nama2 ="ochi2" // variable global
            function init2(){
               
                function tampilNama(){ // inner function (closure*)
                    console.log(nama2) // akses ke parent
                }
                tampilNama();
            }
            init2();
```
### contoh 8
```javascript
            function init(){
                let nama ="ochi" // local variable
                function tampilNama(){ // inner function (closure*)
                    console.log(nama) // akses ke parent
                }
                tampilNama();
            }
            init();
```
### contoh 9
```javascript
            function init(){
                let nama ="ochi" 
                function tampilNama(){ 
                    console.log(nama) 
                }
               return tampilNama
            }
           let panggilNama = init() // disini program baru dijalankan sebagian
           panggilNama()
```
### contoh 10
```javascript
        function init(){
                // let nama ="och434i" 
                function tampilNama(nama){ 
                    console.log(nama) 
                }
               return tampilNama
            }
           let panggilNama = init() // disini program baru dijalankan sebagian
           panggilNama('ochi ganteng')
```
### contoh 11
```javascript
            function init(){
                // let nama ="och434i" 
               return function(nama){ 
                    console.log(nama) 
                }
               
            }
           let panggilNama = init() // disini program baru dijalankan sebagian
           panggilNama('ochi gafgdfgfdnteng')
```

### contoh 12
```javascript
         function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!!`);
    }
  }

  let selamatPagi  = ucapkanSalam('Pagi');
  let selamatSiang  = ucapkanSalam('Siang');
  let selamatMalam  = ucapkanSalam('Malam');


  selamatPagi('ochi')
  selamatMalam('galih')
  selamatSiang('melia')
```

### contoh 13
```javascript

console.log('---------------------- 1')
let tambah = 0
let add = function (){
    console.log(++tambah)
}

add() // 1
add() // 2
add() // 3
add() // 4
add() // 5

console.log('---------------------- 2')
let tambah2 = 0
let add2 = function (){
    console.log(++tambah2)
}
tambah2 = 10
add2() // 11
add2() // 12
add2() // 13
add2() // 14
add2() // 15



console.log('---------------------- 3')
let add3 = function (){
    let tambah3 = 0
    console.log(++tambah3)
}
tambah3 = 10
add3() // 1
add3() // 1
add3() // 1
add3() // 1
add3() // 1


console.log('---------------------- 4')
let add4 = function (){
    let tambah4 = 0
    return function(){
        return ++tambah4
    }
}
let tambah4 = 10
let add4exc = add4();

console.log(add4exc()) // 1
console.log(add4exc()) // 2
console.log(add4exc()) // 3
console.log(add4exc()) // 4
console.log(add4exc())  // 5






console.log('---------------------- 5')
let add5 = (function (){
    let tambah5 = 0
    return function(){
        return ++tambah5
    }
})();

tambah5 = 10

console.log(add5()) // 1
console.log(add5()) // 2
console.log(add5()) // 3
console.log(add5()) // 4
console.log(add5())  // 5
```
