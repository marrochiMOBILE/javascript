function ucapkanSalam(waktu){
    console.log('ada')
    return function(nama){ // return disini mengembalikan function
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!!`);
    }
  }

  let selamatPagi  = ucapkanSalam('Pagi'); // disini baru dijalankan setengah
  let selamatSiang  = ucapkanSalam('Siang');
  let selamatMalam  = ucapkanSalam('Malam');

  