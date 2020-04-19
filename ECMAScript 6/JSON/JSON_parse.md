# JSON parse
mengambil data json

## 1

#### json
```json
[
    {
        "nama" : "marrochi",
        "umur" : 22,
        "lulus" : true,
        "hoby"  : ["gamers","bultang"],
        "pembimbing" : {
            "pembmbing1" : "eko mulyono",
            "pembimbing2" : "vairus sal sabila"
        }
    },
    {
        "nama" : "malia",
        "umur" : 20,
        "lulus" : false,
        "hoby"  : ["berenang"],
        "pembimbing" : {
            "pembmbing1" : "ajis bambang",
            "pembimbing2" : "sania"
        }
    }
]
```
#### js
```js
     var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(myObj)
        }
        };
        xmlhttp.open("GET", "JSON/coba2.json", true);
        xmlhttp.send();
```