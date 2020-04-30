# S2 Higher Order Function
function yg beroperasi pada function yang lain.
Baik itu digunakan dalam argument, maupun sebagai return value

### 1
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function kerjakanTugas(matakuliah, selesai){ // sebenernya tak perlu ada parameter selesai karena fungsi selesi akan berjalan sendiri
            console.log(`Mulai mengerjakan ${matakuliah}`)
            selesai()
        }

        function selesai(){
            alert(`selesai mengerjakan tugas`);
        }


        kerjakanTugas(`Pemrograman Web`, selesai) // sebenernya tak perlu ada parameter selesai karena fungsi selesi akan berjalan sendiri
    </script>
</body>
</html>
```

### 2
```js
let ochi = "marrochi"
            setTimeout(function(){
                console.log(`hai ${ochi}`)
            },1200)

```

#### 3
```js
const tombol = document.querySelector(`.submit`)
tombol.addEventListener('click', function(){
    console.log(`tombol tekan`)
})
```

#### 4
```js
function ucapkanSalam(waktu){
    return function(nama){ // return disini mengembalikan function
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!!`);
    }
  }

  let selamatPagi  = ucapkanSalam('Pagi'); // disini baru dijalankan setengah
  let selamatSiang  = ucapkanSalam('Siang');
  let selamatMalam  = ucapkanSalam('Malam');


  selamatPagi('ochi')
  selamatMalam('galih')
  selamatSiang('melia')
```

