# function 2
disini ada beberapa souce code untuk kalian teliti semangat yo :

#### contoh 1
```javascript
function teks(nama, callback){
  console.log(nama);

  function tes1(){
      // console.log(typeof callback === 'function') 
      if(typeof callback === 'function') callback() 
  }

 tes1(); 
}

teks('marrochi', function (){
console.log('berhasil di callback');
});

// or

// function teks(nama, callback){
//     console.log(nama);
  
//         tes1 = () => {
//         // console.log(typeof callback === 'function') 
//         if(typeof callback === 'function') callback() 
//     }
  
//    tes1(); 
//   }
  
//   teks('marrochi', function (){
//   console.log('berhasil di callback');
//   });
```

#### contoh 2
```javascript
function test(number){
    while(number<5){
        console.log(number);  // 2,3,4
        number++;
    }
    return number;
}

console.log(test(2)); // 5
```

##### atau
```javascript

function person(name, age){
    this.name = name;
    this.age = age;
    this.umurku = Mymethod; 
}

function Mymethod(){
    return 2020 - this.age;
}

console.log(person("marrochi", 1997));  // undifined
```