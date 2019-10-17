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
let character = "Ross";
var tvSeries = "Friends";

// Non reassignable
const rachel = "Rachel";
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
let wereOnABreak;   // default value is undefined
// let wereOnABreak = undefined;    // NEVER do this

if (character === "Ross") {
  wereOnABreak = true;
} else if (character === "Rachel") {
  wereOnABreak = false;
} else {
  wereOnABreak = null;
}
```

---

## Arrays

Indexed using numbers

```js
const characters = [
  "Chandler", "Joey", "Monica",
  "Ross", "Pheobe", "Rachel"
];

const mixed = ["Friends", 1994, true, [25, 17], null];

mixed[1]; // or mixed["1"]
// Output: 1994
mixed[6];
//Output: undefined
```

More on this later

@[1-4]
@[1-6]
@[1-8]
@[1-10]

---

## Loops

```js
const characters = [
  "Chandler", "Joey", "Monica",
  "Ross", "Pheobe", "Rachel"
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
  relationships: ['Angela', 'Kathy', 'Katie', 'Ginger', 'Janine'];
  age: 26
};

joey.age            // "How you doin'?"
joey.isGuestStar    // undefined    // Yup! No error

joey.age = 28
joey.isMainCharacter = true;    // Can do this too.
console.log(joey);      // has a new property
```

@[1-6]
@[1-9]
@[1-13]
---

## You can loop over Objects too!

```js
for (const key in joey) {   // notice `in` instead of `of` as with Arrays
  if (joey.hasOwnProperty(key)) {   // will talk about this during inheritence
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

const getAge = character => ({age: character.age});
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

```js
const character = {
  name: "Joey Tribbianni",
  catchphrase: `How you doin'?`,
  relationships: ['Angela', 'Kathy', 'Katie', 'Ginger', 'Janine'];
  age: 26
};

function updateRelationship(character, name) {
  character.relationships.push(name);
}

function getLastRelationship(character) {
  const relationships = character.relationships;
  return relationships[relationships.length - 1];
}

```

---

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

```js
const joey = new Character("Joey Tribbiani", 26, "How you doin'?")

console.log(joey.getLastRelationship());     // undefined

joey.updateRelationship("Angela");
joey.updateRelationship("Kathy");

console.log(joey.getLastRelationship());     // "Kathy"
```
@[1]
@[1-3]
@[1-6]
@[1-8]

---

Inheritance

---

```js
class Ross extends Character {
  constructor(age, catchphrase) {
    super("Ross Geller", age, catchphrase);
    this.marriedTo = null;
    this.divorces = [];
  }

  marry = (name) => this.updateRelationship(name, true);

  updateRelationship(name, isGettingMarried) {
    if (isGettingMarried) { this.marriedTo = name; }
    super.updateRelationship(name);
  }

  divorce() {
    this.divorces.push(this.marriedTo);
    this.marriedTo = null
  }
}
```

---

```js
const ross = new Ross(30, "Hi.. :'(");
ross.name   // "Ross Geller"
ross.marry("Carol");
ross.getLastRelationship()
ross.divorce();
```

---