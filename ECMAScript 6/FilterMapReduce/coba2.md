# coba2

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <ul>
       <li data-duration="43:40">BOOTSTRAP LANJUTAN | Grid </li>
       <li data-duration="07:21">HTML</li>
       <li data-duration="02:20">BOOTSTRAP LANJUTAN | Modal </li>
       <li data-duration="09:53"> CSS </li>
       <li data-duration="55:20">BOOTSTRAP LANJUTAN | Dropdown </li>
       <li data-duration="06:09"> JQUERI </li>
       <li data-duration="31:40">BOOTSTRAP LANJUTAN | Card </li>
       <li data-duration="02:45" > JAVA</li>
   </ul>

   <h3>My playlist</h3>
    <ol>
        <li>
            <h4>javascript lanjutan</h4>
            <p>jumlah video : <span class="jumlah-video"></span></p>
            <p>total-durasi : <span class="total-video"></span></p>
        </li>
    </ol>

    <script>
        // ambil semua elemen video
        // const videos = document.querySelectorAll(`[data-duration]`) // bentuknya nodelist
        const videos = Array.from(document.querySelectorAll(`[data-duration]`)) 



        // pili hanya yg javascript lanjutan
        let jsLanjut = videos.filter(video => video.textContent.includes('BOOTSTRAP LANJUTAN'))
        
        // ambil durasi masing masing video
        .map(item => item.dataset.duration)
        
        // ubah durai  menjadi Float, ubah menit jadi detik
        .map(waktu =>{
            // 10:20 => [10, 20]
            const parts = waktu.split(':').map(part => parseFloat(part));
            return (parts[0] * 60) + parts[1] 

        })
        // jumlahkan semua detiknya
        .reduce((total, detik) => total + detik)

        // ubah format jadi jam menit detik
                                 //7980
        const jam = Math.floor(jsLanjut / 3600)
        jsLanjut = jsLanjut - jam * 3600 // sisa 780
        const menit = Math.floor(jsLanjut / 60) // 13
        const detik = Math.floor(jsLanjut - menit * 60) // 0
        
        
        // simpan di dom
        const pDurasi = document.querySelector(`.total-video`)
            pDurasi.textContent = `${jam} : ${menit} : ${detik}`;

        const  jmlVideo = videos.filter(video => video.textContent.includes('BOOTSTRAP LANJUTAN')).length;
        const  pJmlVideo = document.querySelector('.jumlah-video')
            pJmlVideo.textContent = `${jmlVideo} Video` 

    </script>
</body>
</html>
```