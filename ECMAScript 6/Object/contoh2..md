# Object `2`

dibwah ini adalah contoh sederhana dari object lanjutan setelah contoh 1 yang telah dipelajari ok
> step 1
```javascript
// 1
let tree = {
      height: 10,
      color: 'blue',
      grow() {
        this.height +=2;
      }
};

tree.grow();
console.log(tree.height); // 12


// 2
let color = 'merah';
function tes(){
  return this.color  ; // undifined
}
console.log(tes())
```

1. `1` jika kita lihat disitu kenapa console tree.height 12? karena sebelum di console kiat sudah memina object utnuk menjalnkan fungsi grow
1. `2` kalo disini kenapa undefined karena nilainya tidak diketahui atau tidak terbatas

> step 2

```javascript
let height = 50;
let health = 100;
let funOne = () => { 
  return health += 20;
};


let marroci = {
  height,
  health
}
console.log(marroci); // { height: 50, health: 100 }


console.log(funOne()) // 120

console.log(marroci); // { height: 50, health: 100 }

/*
kenapa diconsole log erakhir health masih tetep seratus? karena si fungsi hanya mengembalikan fungsinya bukan berarti mengisi let height menjadi 120
*/
```

> step 3 
dibawah boleh dibandingin sama y
```javascript
let prop = 'name';
let id = '1234';
let mobile = '08138599';

let user = {
  [prop] : 'jack',
  [`user_${id}`] : `${mobile}`
};

console.log(user.name); // jack

console.log(user.user_1234); // 08138599

console.log(user); // { name: 'jack', user_1234: '08138599' }
```

> step 4
```javascript
let  i = 0;
let a = {
  ['number' +  ++i]: i,
  ['number' +  ++i]: i,
  ['number' +  ++i]: i
}

console.log(a.number1); // 1
console.log(a.number2); // 2
console.log(a.number3); // 3
console.log(a);    // { number1: 1, number2: 2, number3: 3 }

```
> step 5

```javascript
let param = 'size';
let config = {
  [param] : 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)] : 4
};
console.log(config.mobileSize); // 4
console.log(config); // { size: 12, mobileSize: 4 }

console.log(param.charAt(0)); // s
console.log(param.charAt(1)); // i
console.log(param.charAt(2)); // z
console.log(param.charAt(3)); // e


console.log(param.charAt(3).toUpperCase()); // E

console.log(param.slice(0)); // size
console.log(param.slice(1)); // ize
console.log(param.slice(2)); // ze
console.log(param.slice(3)); // e
```

> step 6

#### 6a
```javascript
person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  // age: 20,
  xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2
console.log(newStudent); // { name: 'Bob', age: 18, sex: 'male', xp: '2' }
```
#### 6b
```javascript
let person = {
  name : 'ochi',
  age : '22'
}

let newPerson = Object.assign({}, person, {name : 'ganteng'}); // { name: 'ganteng', age: '22' }

console.log(newPerson);
```