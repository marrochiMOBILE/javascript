# Class
penulisan class sederhana.

```javascript
class Marrochi {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  const square = new Marrochi(5, 5); // Marrochi { height: 5, width: 5 }
  const poster = new Marrochi(2, 3);  // Marrochi { height: 2, width: 3 }


  console.log(square);
  console.log(poster);
```

dibawah ini sebuah variable bernilai Class
```javascript
let Ochi = class ochiGanteng {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new Ochi(5, 5);
const poster = new Ochi(2, 3); 

console.log(square.height); // 5
console.log(square.width);  // 5
console.log(poster);  // ochiGanteng { height: 2, width: 3 }
```

bandingkan dengan class yg bawah apa perbedaanya

```javascript
let Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new Square(5, 5);
const poster = new Square(2, 3); 

console.log(square.height); // 5
console.log(square.width);  // 5
console.log(poster);  // Square { height: 2, width: 3 }
```

## > part 2
```javascript
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() {
      return this.calcArea();
    }
    calcArea() {
      return this.height * this.width;
    }
  }
  const square = new Rectangle(5, 5);
  console.log(square.area); // 25
```

## > part 3
```javascript
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(a, b) {
      const dx = a.x - b.x; // 4
      const dy = a.y - b.y; // -6
      return Math.hypot(dx, dy);
    }
  }
  const p1 = new Point(7, 2);
  const p2 = new Point(3, 8);
  
  console.log(Point.distance(p1, p2));
```

## > part 4
#### 4a
```javascript
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }

  class Dog extends Animal {
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak();

```
#### 4b
```javascript
class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  
  class Dog extends Animal {
    speak() {
      super.speak(); // Super
      console.log(this.name + ' barks.');
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak();

```

### 4c
```javascript
class Rectangle {
    constructor() {}
    static logNbSides() {
      return 'I have 4 sides';
    }
  }
  
  class Square extends Rectangle {
    constructor() {}
    static logDescription() {
      return super.logNbSides() + ' which are all equal';
    }
  }
  console.log(Square.logDescription()); // 'I have 4 sides which are all equal'

```