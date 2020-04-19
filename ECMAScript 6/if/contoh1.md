# If condition

#### contoh 1

```javascript
const xwayzet = 12;
let ok;

if(xwayzet >= 4 && xwayzet <= 5){
    ok ='40'
}
else if(xwayzet >= 0 && xwayzet <= 1){
    ok='10'
}
else if(xwayzet >= 2 && xwayzet <= 3){
    ok='30'
}
else{
    ok='okedeh';
}

console.log(ok);
```

#### contoh 2

```javascript
function oke(player, computer){
    let result;
    if(player === 'scissor'){
        if(computer === 'scissor'){
            result = 'draw';
        }
        else if(computer === 'rock'){
            result = 'player win';
        }
    }else if(player === 'rock'){
        if(computer === 'scissor'){
            result = 'computer win'
        }
    }
    else if(player === 'paper'){
        if(computer === 'paper'){
            result = 'draw';
        }
    }
    return result;
}

console.log(oke('scissor', 'rock'));//player win
console.log(oke('rock', 'scissor'));//computer win win
console.log(oke('paper', 'paper'));// draw
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
