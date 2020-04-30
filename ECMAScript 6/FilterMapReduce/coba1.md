# coba1

```js
  const array = [-9, 0 , 2, 1, 2, 4, 5, 6, 0]
        const newAngka = []
        for (i = 0 ; i < array.length ; i++){
            if(array[i] >= 3){
                newAngka.push(array[i]);
            }
        }
        console.log(newAngka) // [4, 5, 6]
```

### filter
```js
 
const array = [-9, 0 , 2, 1, 2, 4, 5, 6, 0]
         
          const newAngka = array.filter(function(e){
              return e >= 3;
          })

        // //   arrowfunction
        //   const newAngka = array.filter(e => e >= 0 );
         
         console.log(newAngka) // [4, 5, 6]
```

### map
```js
const array = [-9, 0 , 2, 1, 2, 4, 5, 6, 0]
         
          const newAngka = array.map(a => a * 2)
         
         console.log(newAngka) 
        //  [
        //     -18,  0,  4, 2, 4,
        //       8, 10, 12, 0    
        //   ]
```

### reduce
```js
const array = [-9, 0 , 2, 1, 2, 4, 5, 6, 0]
         
          const newAngka = array.reduce((accumulator, currenValue) => accumulator + currenValue )
        //   const newAngka = array.reduce((accumulator, currenValue) => accumulator + currenValue, 5 ) // 5 disini nilai tambahan jika tida disisi valuenya 0
         
         console.log(newAngka) // 11

```

### method chaining
```js
    const array = [-9, 0 , 2, 1, 2, 4, 5, 6, 0]
         
          const newAngka = array.filter(e => e >= 3) // 4 5 6
          .map(a => a + 2) // 6 7 8
          .reduce((acc, cv) => acc + cv); // 6+7 +8 
         
         console.log(newAngka) // 21

```