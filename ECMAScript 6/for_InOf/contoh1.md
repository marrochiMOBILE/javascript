# FOR IN LOOP

#### contoh 1

```javascript
// FOR IN LOOP
let index;
let person = {
       nama : "marrochi",
       umur : 22,
       jk : "pria"
};



for(index in person){
    console.log(index); // menampilkan attributenya
};

console.log('\n----------\n');

for(index in person){
    console.log(person[index]); // menampilkan nilai atributnya
};
```

# FOR OF LOOP

#### CONTOH 1

```JAVASCRIPT
// FOR OF untuk array
let index;
let numbers = [1, 2, 3, 4, 5];

for(index in numbers){
    console.log(numbers[index]); //12345
}

console.log('\n--------\n');

for(index of numbers){
    console.log(index);  // 12345
}
for(index in numbers){
    console.log(index);  // 01234
}
```