# Number 

### ``` Number ``` => hanya menerima string berupa number, jika ada selain number seperti huruf maka akan mengembalikan NaN (Not a Number)
### ``` parseInt ``` => hanya convert angka asli dan mengabaikan huruf juga angka dibelakang koma 
### ``` parseFloat ``` => convert angka di belakang koma dan juga mengabaikan huruf

```javascript
console.log(parseInt('44.4'));
```

##### bandingkan

```javascript
  console.log(parseInt("42.1px")); // 42
  console.log(Number("42.1px")); // NaN
  console.log(parseFloat("42.1px")); // 42.1
```

## mencari number dikumpulan string
```javascript
 function validateName2(string2) {
    for (let i = 0; i < string2.length; i++) {
      // console.log(Number(string2[i])); // kita coba console.log dulu
      if (Number(string2[i])) {
        return "ini index ke " + i + " dan berupa angka " + string2[i];
      }
    }
  }
  
  const name2 = "w3kitase3mu4";
  console.log(validateName2(name2)); //ini index ke 1 dan berupa angka 
```

#### bandingkan

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