# BACKTICK
 penggunaan ```backtick`` sangat peraktis dan mudah di gunakan 
 
 #### contoh 1
 ```javascript
 let nilaiA = 5;
let nilaiB = 3;
let nilaiAB = `nilai A adalah ${nilaiA} nilai B adalah ${nilaiB}`;
console.log(nilaiAB);
 ```

 #### contoh 2
 ```javascript
 const paragraph = `
I am a new paragraph.
And, you can make a new 'break line' inside of me.
`;

console.log(paragraph);
 ```

 ### contoh 3
 ```javascript
 const x = 13
console.log(`${(x % 2 == 0) ? `genap` : 'ganjil' }`) 
 ```

 ### contoh 4
 didalam bactick ctr + ,(koma) terus cari include language
 ```
 Emmet: Include Languages
Enable Emmet abbreviations in languages that are not supported by default. Add a mapping here between the language and emmet supported language. E.g.: {"vue-html": "html", "javascript": "javascriptreact"}
 ```

 ```html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
            const mhs = {
    nama :  `marrochi`,
    umur : 33,
    nim  : `171011400286`,
    email : `marrochi@email.com`
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nim}</span>
</div>`

console.log(el);
    </script>
</body>
</html>
 ````