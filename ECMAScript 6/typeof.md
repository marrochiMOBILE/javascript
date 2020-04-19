# typeof

#### contoh 1
```javascript
//MENGENAL TYPE OF

const valueOne = null;
const valueTwo = 'Ahmad';
const valueThree = 100;
const valueFour = true;
const valueFive = undefined;
const valueSix = ['beno','lala'];
const valueSeven = {
                nama: 'marrochi'
};
const valueEight = function fugsiOne() {};

console.log(typeof valueOne);
console.log(typeof valueTwo);
console.log(typeof valueThree);
console.log(typeof valueFour);
console.log(typeof valueFive);
console.log(typeof valueSix);
console.log(typeof valueSeven);
console.log(typeof valueEight);



// dan kapan type of itu digunakan contoh sederhana dibawah ini


const inputOne = 2122017291291;
if(typeof inputOne === 'number'){
    console.log('yes');
}else{
    console.log('no');
}
let inputOnee = '2122017291291';
if(typeof inputOnee === 'number'){
    console.log('yes');
}else{
    console.log('no');
}

```

#### contoh 2
```javascript
function jenisTypeOf(nama){
    return typeof nama;
}

function jenisTipe(nama){
    if(typeof nama === 'string'){
            nama = 'berhasil diproses';
    }else{
            nama = 'number tidak bisa digunakan';
    }
    return nama;
}

console.log(jenisTypeOf('aku dan kamu'));
console.log(jenisTypeOf(09090));
console.log(jenisTypeOf(null));
console.log(jenisTypeOf(['ikan', 'ayam']));
console.log(jenisTipe('number'));
console.log(jenisTipe(3209239032));

```