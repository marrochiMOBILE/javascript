# Try and Catch

Try and Catch adalah error handling, dan sangat penting ya.


```javascript
try{
  console.log('berjalan sederhana'); // <-1
  uniqle(); // eror
  console.log('berjalan ke dua');
}catch(err){
  console.log("ini peringatan error" + err); // <- 2
}finally{
  console.log("jalanin aja ok"); // <- 3
}

console.log("maju cepat terus angin berputar"); // <-4
```
jika kita lihat diatas ketika `try` ada yg eror maka promrag selanjutnya langsung berhenti. dan ditangani oleh `catch` dan membawa peringata pesan *** err *** . kemudian `finally ` itu finishingnya mau ke gimana nih? misalnya jalanin aja udah.

```javascript
const person = {
  firstName: 'Basho',
  lastName: 'Code',

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(name) {
    const yourName = name.split(' ');
    this.firstName = yourName[0];
    this.lastName = yourName[1];
  }
};

person.fullName = undefined;

console.log(person.fullName); // eror
```

Bagaimana jika kode diatas dijalankan ? Hasilnya akan error bukan, kenapa ? Karena kita mempassing undefined, dan undefined tidak bisa di split karena bukan string.

Nah, ini bisa saja terjadi jika user tidak memberikan nama mereka, dan itulah kenapa ada error handling.

```javascript
const person = {
  firstName: 'Basho',
  lastName: 'Code',

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(name) {
    // 1
    if (typeof name !== 'string') {
      throw new Error('tidak ada string booy');
    }

    const yourName = name.split(' ');
    this.firstName = yourName[0];
    this.lastName = yourName[1];
  }
};

// 2
try {
  person.fullName = undefined; // tidak ada string booy
} catch (err) {
  console.log(err);
}

console.log(person.fullName); // basho code
```

Penjelasannya:

1. Kita bisa menggunakan pengecekan apakah value yang di passing itu string atau bukan, lalu jika bukan maka kita akan melempar error
1. di bagian try kita mencoba mempassing undefined bukan ? Dan ternyata undefined bukan string, kemudian error akan keluar. Dan di bagian catch kita akan mendapatkan error yang di lempar, dan jika kita console.log maka hanya developer yang tau errornya lalu bagaimana jika kita ingin memberikan info itu kepada pengguna ? well kita bisa menggunakan alert.

```javascript
const person = {
  firstName: 'Basho',
  lastName: 'Code',

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(name) {
    if (typeof name !== 'string') {
      throw new Error('name is not string.');
    }

    const yourName = name.split(' ');
    this.firstName = yourName[0];
    this.lastName = yourName[1];
  }
};

try {
  person.fullName = '';
} catch (err) {
  console.log(err);
}

console.log(person.fullName);
```

Lalu bagaimana jika hanya string kosong yang di passing ? tentunya kita tidak mendapatkan error namun, kita tidak ingin mendapat nama kosong bukan ?

```javascript
const person = {
  firstName: 'Basho',
  lastName: 'Code',

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(name) {
    if (typeof name !== 'string') {
      throw new Error('name is not string.');
    }

    const yourName = name.split(' ');
    if (yourName.length < 2) {
      throw new Error('name must have first and last name');
    }

    this.firstName = yourName[0];
    this.lastName = yourName[1];
  }
};

try {
  person.fullName = '';
} catch (err) {
  console.log(err);
}

console.log(person.fullName);
```

Kita bisa menggunakan pengecekan lagi, seperti diatas.
