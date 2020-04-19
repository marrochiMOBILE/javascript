# comparing
Untuk membandingkan sebuah string, biasanya menggunakan

```javascript
    function compareString(params1, params2) {
        if (params1 === params2) return true;
        else return false;
    
        // or
    
        /*
        if (params1 === params2)
        return true;
        else
        return false;
        */
    }
    
    const bootcamp = "mobilItuCar";
    const anotherBootcamp = "honda";
    const onlineBootcamp = "suzuiki";
    const learnCode = "mobilItuCar";
    
    console.log(compareString(bootcamp, learnCode)); // true
    console.log(compareString(anotherBootcamp, onlineBootcamp)); // false
```

**tips**

> Jika setelah if/else hanya ada satu baris statement, kita bisa menghilangkan kurung kurawal

Namun, ada cara yang lebih mudah yakni menggunakan localCompare

```javascript
    var a = "hello";
    var b = "world";

    console.log(a.localeCompare(b)); // -1
```
-1 untuk false, dan 1 untuk true.