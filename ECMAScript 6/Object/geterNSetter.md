# getter and setter object

contoh sederhana dibawah ini menunjukan adanya get yang menangkap nilai dan set yang menyeting nilai. jika tidak ada ni;

```javascript
var person = {
    firstName: 'Jimmy', // 3 berhenti disini
    lastName: 'Smith', //  

    get fullName() {  
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) { // 2
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
    
}

console.log(person.firstName); // Jimmy
console.log(person.lastName) // Smith

person.fullName = 'marr ochi'; // 1

console.log(person.firstName); //marr
console.log(person.lastName); //ochi

```

jika kurang mengerti contoh diatas coba lihat dibawah ini

```javascript
var person = {
    firstName: 'Jimmy', // 3
    lastName: 'Smith', //  

    get fullName() {  
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) { // 2
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
    
}

console.log(person.firstName); // Jimmy
console.log(person.lastName) // Smith

person.fullName = 'marr ochi'; // 1

console.log(person.firstName); //marr
console.log(person.lastName); //ochi

```

#### contoh 2

ini ada contoh sangat sederhana
```javascript
var o = {
    a: 7, // proses 3  // a2 b2 c1 d2
    get c() { // proses 4  b3   d3
      return this.a += 1; 
    },
    set c(x) { // proses 2
      this.a = x / 2;
    }
  };
  
  console.log(o.a); // 7 a1
  console.log(o.c) // 8 b1
  o.c = 50; // proses 1
  console.log(o.a); // 25 c1
  console.log(o.c); // 26 d1
```