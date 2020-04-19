# do while loop

#### contoh 1

```javascript
// DO WHILE LOOP

let i = 1;
do{
    if( i % 2 === 0 ) {console.log(i, "genap");}
    i++;
}while(i <= 4 );

console.log(i);
```

#### contoh 2

```javascript
let i = 1;
do{
    console.log(i); // 1
                    // 2
                    // 3
                    // 4
                    // 5 false
    i++;
}while(i <= 4 );

console.log('\n-------------------------------\n');
console.log(i); // 5
```