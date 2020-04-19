# object Lanjut 2
### 1
```javascript
let tes1 = {
    a : 1,
    b : function(b= null){
        this.a = this.a +b
       console.log(this.a) // 3
    }
}
tes1.b(2)
```
output :
```javascript
3
```

### 2
```javascript
let profile = {
    nama : 'marrochi',
    lahir : 1997,
    umur : null,
    masukanTahun : function(umur = null){
       return this.umur = umur - this.lahir
    }
}

console.log(profile)
profile.masukanTahun(2020)
console.log(profile)

```

output :
```javascript

{
  nama: 'marrochi',
  lahir: 1997,
  umur: null,
  masukanTahun: [Function: masukanTahun]
}
{
  nama: 'marrochi',
  lahir: 1997,
  umur: 23,
  masukanTahun: [Function: masukanTahun]
}
3
```


### 3
```javascript
function profile(nama = null, lahirTahun=null, tahunSekarang = null ){
    let profile =  {}
    profile.nama = nama;
    profile.lahirTahun = lahirTahun;
    profile.umur = null;
    profile.methodOne = function (){
                this.umur = tahunSekarang - this.lahirTahun; 
               console.log(`hai ${this.nama} selamat umur kamu sekarang `,this.umur); 
    }
    profile.methodOne();
    return profile
}


let marrochi = profile('marrochi', 1997, 2020)
console.log(marrochi)
```

output :
```javascript
hai marrochi selamat umur kamu sekarang  23
{ 
    nama: 'marrochi', 
    lahirTahun: 1997, 
    umur: 23, 
    methodOne: [Function] 
}
```

### 4
```javascript


function profile(nama = null, lahirTahun=null, tahunSekarang = null ){
    this.nama = 'marrochi';
    this.lahirTahun = 1997;
    this.umur = null;
    this.energi = 10;
    this.tanyaUmur = function (){
                this.umur = tahunSekarang - this.lahirTahun; 
               console.log(`hai ${this.nama} selamat umur kamu sekarang `,this.umur); 
    }

    this.mainGame = function (jam = null){
        this.energi -= jam
        console.log(this.energi)
    }
}

let marrochi = new profile('marrochi', 1997, 2020)
console.log(marrochi)

marrochi.tanyaUmur()
marrochi.mainGame('1')

```
output :
```javascript
profile {
  nama: 'marrochi',
  lahirTahun: 1997,
  umur: null,
  energi: 10,
  tanyaUmur: [Function],
  mainGame: [Function]
}
hai marrochi selamat umur kamu sekarang  23
9
```

### 5
```javascript
const OBJ2energikyu = {
    makan: function(e){
       let max = this.energi + e;
       if(max == 10){
            return 'kekenyangan bosqueee usahain kurangin takaran '
       }else{
        this.energi += e
        return `energi bertambah ${this.energi}`
       }  
    },
    main : function(o){
        let min = this.energi - o
        if(min == -1){
            return 'jangan kebanyakan ngegame bosque saaatnya istirahat'
        }
        else{
            this.energi -= o
            return `energi berkurang ${this.energi}`
        }
    },
    tidur: function(c){
        this.energi = 10
        return `selamat tidur`
    }
} 

function EnergiKyu (data = null){
 let Oenergi = {}
 Oenergi.nama = data 
 Oenergi.energi = 10
 Oenergi.makan = OBJ2energikyu.makan
 Oenergi.main = OBJ2energikyu.main
 Oenergi.tidur = OBJ2energikyu.tidur

 return Oenergi

}

let marrochi = EnergiKyu('marrochi')

console.log(marrochi)
console.log(marrochi.main(3))
console.log(marrochi.makan(2))
```
output :
```javascript
{
  nama: 'marrochi',
  energi: 10,
  makan: [Function: makan],
  main: [Function: main],
  tidur: [Function: tidur]
}
7
9
```


### 6
```javascript
const OBJ2energikyu = {
    makan: function(e){
       let max = this.energi + e;
       if(max == 10){
            return 'kekenyangan bosqueee usahain kurangin takaran '
       }else{
        this.energi += e
        return `energi bertambah ${this.energi}`
       }  
    },
    main : function(o){
        let min = this.energi - o
        if(min == -1){
            return 'jangan kebanyakan ngegame bosque saaatnya istirahat'
        }
        else{
            this.energi -= o
            return `energi berkurang ${this.energi} `
        }
    },
    tidur: function(c){
        this.energi = 10
        return `selamat tidur`
    }
} 

function EnergiKyu (data = null){
 let Oenergi = Object.create(OBJ2energikyu)
 Oenergi.nama = data 
 Oenergi.energi = 10
 Oenergi.makan = OBJ2energikyu.makan
 Oenergi.main = OBJ2energikyu.main
 Oenergi.tidur = OBJ2energikyu.tidur

 return Oenergi

}

let marrochi = EnergiKyu('marrochi')

console.log(marrochi)
console.log(marrochi.main(3))
console.log(marrochi.makan(2))
```

output :
```javascript
{
  nama: 'marrochi',
  energi: 10,
  makan: [Function: makan],
  main: [Function: main],
  tidur: [Function: tidur]
}
7
9
```

### 7
```javascript

function EnergiKyu (data = null){
    this.nama = data 
    this.energi = 10
}

EnergiKyu.prototype.makan = function(e){
    let max = this.energi + e;
     if(max == 10){
       return 'kekenyangan bosqueee usahain kurangin takaran '
    }else{
         this.energi += e
         return `energi bertambah ${o} total ${this.energi}`
             }  
         }
                
EnergiKyu.prototype.main =  function(o){
       let min = this.energi - o
       if(min == -1){
               return 'jangan kebanyakan ngegame bosque saaatnya istirahat'
        }
       else{
           this.energi -= o
            return `energi berkurang  ${o} sisa ${this.energi}`
             }
       }
               
EnergiKyu.prototype.tidur = function(c){
      this.energi = 10
      return `selamat tidur`
     }
        
     
console.log(new EnergiKyu('marrochi').main(2))
```

output :
```javascript
energi berkurang  2 sisa 8
```

### 8
```javascript
class EnergiKyu{
    constructor (data = null){
        this.nama = data 
        this.energi = 10
    }
    makan(e){
        let max = this.energi + e;
        if(max == 10){
            return 'kekenyangan bosqueee usahain kurangin takaran '
        }else{
            this.energi += e
            return `energi bertambah ${o} total ${this.energi}`
        }  
    }
    main(o){
        let min = this.energi - o
        if(min == -1){
              return 'jangan kebanyakan ngegame bosque saaatnya istirahat'
           }
         else{
             this.energi -= o
             return `energi berkurang  ${o} sisa ${this.energi}`
            }
        }
    tidur(c){
         this.energi = 10
         return `selamat tidur`
       }

}




                
               
        
     
console.log(new EnergiKyu('marrochi').main(2))
```
output :
```javascript
energi berkurang  2 sisa 8
```