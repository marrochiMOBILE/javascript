# Ternary

Operasianal kondisional (ternary) adalah satu-satunya operator yang hanya membutuhkan tiga operator. Operator ini sering digunakan sebagai jalan pintas untuk ``` if ``` statement.

#### contoh 1
```javascript
  let parahJasa = 89;
    let ahaFuck = parahJasa >=90 ? 'Anda Lulus' : 'Anda Tidak Lulus';

    let parahJasa2 = 95;
    let ahaFuck2 = parahJasa2 >=90 ? 'Anda Lulus' : 'Anda Tidak Lulus';    

    console.log(ahaFuck);
    console.log(ahaFuck2);
```


#### contoh 2
```javascript
var elvisLives = Math.PI > 4 ? 'Yep' : 'Nope';
var ok = Math.PI;

console.log(ok); //3.14
console.log(elvisLives);
```