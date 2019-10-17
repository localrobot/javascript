# Javascript

### Knowledge Sharing Series

Anurag Kumar

18th Oct, 2019

---

## Agenda

- Basics
- Inheritance: Prototype Chains
- Functional Programming
- Collections
- Objects
- `this`
- Async Operations
- ES6+
- References

---

# Basics

---

## Javascript

- Dynamically Typed
- OOP & FP

---

## Variables

```js
// A reassignable varibale
let character = 'Ross';
var tvSeries = 'Friends';

// Non reassignable
const rachel = 'Rachel';
```

---

## Operators

- Assignment: `=`, `+=`, `-=`, `*=`, ...
- Arithmatic: `+`, `-`, `*`, `/`, `%`
- Comparison: `==`, `!=`, `<`, `!==`, `===`, ...
- Logical: `&&`, `||`, `!`
- `typeof`, `instanceof`, `in`, `delete`, `new`

---

## Control Flow

```js
let wereOnABreak; // default value is undefined
// let wereOnABreak = undefined;    // NEVER do this

if (character === 'Ross') {
  wereOnABreak = true;
} else if (character === 'Rachel') {
  wereOnABreak = false;
} else {
  wereOnABreak = null;
}
```

---

## Arrays

Indexed using numbers

```js
const characters = ['Chandler', 'Joey', 'Monica', 'Ross', 'Pheobe', 'Rachel'];

const mixed = ['Friends', 1994, , true, [25, 17], null];

mixed[1]; // 1994
mixed["4"]  // [25, 17]
mixed[6]; // undefined
mixed[2]; // undefined
mixed.length === 6; /// true
```

More on this later

@[1-4]
@[1-8]

---

## Loops

```js
const characters = [
  'Chandler', 'Joey', 'Monica',
  'Ross', 'Pheobe', 'Rachel'
];

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

for (const character of characters) {
  console.log(character);
}

let i = 0;
while (i < characters.length) {
  console.log(character[i]);
  i++;
}
```

@[1-8]
@[1-4, 10-12]
@[1-4, 14-18]

---

## Objects

Indexed using string

```js
const joey = {
  name: "Joey Tribbianni",
  catchphrase: `How you doin'?`,
  relationships: ['Angela', 'Kathy', 'Katie', 'Ginger', 'Janine'],
  age: 26,
};

joey.age            // "How you doin'?"
joey.isGuestStar    // undefined    // Yup! No error

joey.age = 28
joey.isMainCharacter = true;    // Can do this too.
console.log(joey);      // joey now has a new property
```

@[1-6]
@[1-9]
@[1-13]

---

## You can loop over Objects too!

```js
const joey = {
  name: "Joey Tribbianni",
  catchphrase: `How you doin'?`,
  relationships: ['Angela', 'Kathy', 'Katie', 'Ginger', 'Janine'],
  age: 26,
};

// notice `in` instead of `of` as with Arrays
for (const key in joey) {
  // will talk about this during inheritence
  if (joey.hasOwnProperty(key)) {
    console.log(joey[key]);
  }
}
```

More on this later

---

# Functions

---

### Simplest way

```js
function updateRelationship(character, name) {
  character.relationships.push(name);
}

function getLastRelationship(character) {
  const relationships = character.relationships;
  return relationships[relationships.length - 1];
}
```

@[1-3]
@[5-8]

---

### Another way

Function Expressions

```js
const getName = function name(character) {
  return character.name;
};

const getName = function(character) {
  return character.name;
};

const getName = (character) => {
  return character.name;
};

const getName = character => character.name;

const getAge = character => ({ age: character.age });
```

@[1-3]
@[1-7]
@[1-11]
@[1-13]
@[1-15]

---

# Clases

---

@fa[quote-left](A `class` encapsulates data and functions that act on **those** data)

Let's take an example

---

@snap[west span-45]
```js
const character = {
  name: "Joey Tribbianni",
  catchphrase: `How you doin'?`,
  relationships: [
    'Angela', 'Kathy',
    'Katie', 'Ginger', 'Janine'
  ];
  age: 26,
};

function updateRelationship(character, name) {
  character.relationships.push(name);
}

function getLastRelationship(character) {
  const relationships = character.relationships;
  return relationships[relationships.length - 1];
}

```
@snap[east span-50]
```js
class Character {
  constructor(name, age, catchphrase) {
    this.name = name;
    this.age = age;
    this.catchphrase = catchphrase;
    this.relationships = [];
  }

  updateRelationship(name) {
    this.relationships.push(name);
  }

  getLastRelationship = () =>
    this.relationships[this.relationships.length - 1];
}
```

---
## Instance
```js
const joey = new Character('Joey Tribbiani', 26, "How you doin'?");

console.log(joey.getLastRelationship()); // undefined

joey.updateRelationship('Angela');
joey.updateRelationship('Kathy');

console.log(joey.getLastRelationship()); // "Kathy"
```

@[1]
@[1-3]
@[1, 5-8]

---

# Inheritance

---

```js
class Ross extends Character {
  constructor(age, catchphrase) {
    super('Ross Geller', age, catchphrase);
    this.marriedTo = null;
    this.divorces = [];
  }

  marry = name => this.updateRelationship(name, true);

  updateRelationship(name, isGettingMarried) {
    if (isGettingMarried) {
      this.marriedTo = name;
    }
    super.updateRelationship(name);
  }

  divorce() {
    this.divorces.push(this.marriedTo);
    this.marriedTo = null;
  }
}
```

---

```js
const ross = new Ross(30, "Hi.. :'(");
ross.name; // "Ross Geller"
ross.marry('Carol');
ross.getLastRelationship(); // parent class's method
ross.divorce();
```

---

## Prototype Chain
---

There are no classes in JS. They are just syntactic suger.

---

```js
function Character(name, age, catchphrase) {
  this.name = name;
  this.age = age;
  this.catchphrase = catchphrase;
  this.relationships = [];
}
Character.prototype.updateRelationship = function(name) {
  this.relationships.push(name);
};

Character.prototype.getLastRelationship = () =>
  this.relationships[this.relationships.length - 1];
```
@[1-6]
@[1-11]

---

```js
function Ross(age, catchphrase) {
  Character.call(this, "Ross Geller", age, catchphrase);
  this.marriedTo = null;
  this.divorces = [];
}
Ross.prototype = Object.create(Character.prototype);
Ross.prototype.constructor = Ross;

Ross.prototype.marry = (name) => this.updateRelationship(name, true);

Ross.prototype.updateRelationship = (name, isGettingMarried) => {
  if (isGettingMarried) { this.marriedTo = name; }
  Character.prototype.updateRelationship.call(this, name);
}

Ross.prototype.divorce = () => {
  this.divorces.push(this.marriedTo);
  this.marriedTo = null
}
```
@[1-5]
@[1-6]
@[1-7]
@[1-9]
@[1-14]
@[1-19]

---

        .call()
        .bind()
        .apply()
        .name

Object <- Function <- Inbuilt Objects

.hasOwnProperty()
.prototype
.prototype.constructor
.toString()

```js
```
