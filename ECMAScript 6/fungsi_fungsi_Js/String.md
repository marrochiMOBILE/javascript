# String

#### CONTOH 1

```javascript
let numberOne = 30;

console.log(numberOne); // 30 integer

console.log(String(numberOne)); // 30 string

console.log(numberOne.toString()); // 30 string
```

#### contoh 2
```javascript
function cGenap(number){
    const strNum2 = String(number);

    for(let i=0; i < strNum2.length ; i++){
        const numFromStr2 = Number(strNum2[i]);

        if(numFromStr2 % 2 === 0){
            return numFromStr2 ;
        }

    }
}


const rscGenap = cGenap(12345);
console.log(rscGenap); // 2
```