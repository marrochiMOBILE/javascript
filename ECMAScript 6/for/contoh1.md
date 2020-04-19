# FOR
dibawah ini  adalah contoh sederhana dari for. 

```javascript
let arr = [1, 2, 3];

for(let k = 0; k<arr.length; k++){
    console.log(arr[k]);
}
```

#### contoh 1
```javascript
// FOR LOOP

// contoh 1
let result;
for(let i=0; i<5; i++){
   if (i == 2){
           result += '\n';
       for(let j=0; j<5; j++){
         result += '*\t';
       }
           
   }else{
   result += '\n';
   for(let j=0; j<5; j++){
       if(j == 1 || j == 2 || j == 3){
             result += '=\t';
       }else{
        result += '*\t';
       }
   }
   }
}

console.log(result);

// *       =       =       =       *
// *       =       =       =       *
// *       *       *       *       *
// *       =       =       =       *
// *       =       =       =       *
```


#### contoh 2
``` mengembalikan kata kata  kamu -> umak```
```javascript
// contoh 2
function stringOK(string){
    let result2 = '';
        for(let i = string.length - 1; i >= 0; i-- ){
            result2 += string[i];
        }
        return result2;
}
console.log(stringOK('aku'));
console.log(stringOK('kamu jahat'));
console.log(stringOK('suka suka'));

let akhoy = 'akhoy';
console.log(akhoy.length); // output 5
```

## menggunakan break dan continue

```javascript
for(let i = 0 ; i <= 10; i++ ){
    if(i == 5){
        break;
    }
    console.log(i+'\n'); 
}
/*
0
1
2
3
4
*/
```
setelah memenuhi syarat  pengulangan berhenti


```javascript
for(let i = 0 ; i <= 10; i++ ){
    if(i == 5){
       continue;
    }
    console.log(i+'\n');
}
```

setelah memenuhi sayarat yg satu dilewatkan
