# hypot


Fungsi Math.hypot () mengembalikan akar kuadrat dari jumlah kuadrat argumennya

```javascript
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN, +'foo' => NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755, +'5' => 5
Math.hypot(-3);          // 3, the same as Math.abs(-3)
```