# lastIndexOf
Jika indexOf akan mereturn yang pertama kali di temukan, maka lastIndexOf akan mereturn yang terakhir kali di temukan.

Lalu bagaimana dengan includes ?

Includes akan mereturn true jika dia menemukan value yang di cari, dan false jika tidak.


```javascript
    const alpha = ['a', 'b', 'c', 'd', 'e', 'a', 'b'];

    const indexOfA = alpha.indexOf('a');
    const lastIndexOfA = alpha.lastIndexOf('a');
    const includesA = alpha.includes('a');

    console.log(indexOfA); // 0
    console.log(lastIndexOfA); // 5
    console.log(includesA); // true
```