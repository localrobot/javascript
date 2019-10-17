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

- Assignment
- Arithmatic
- Comparison
- Logical
- `typeof`, `instanceof`, `in`, `delete`, `new`

---

## Control Flow

```js
let wereOnABreak;
// let wereOnABreak = undefined;

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
const characters = ["Chandler", "Joey", "Monica", "Ross", "Pheobe", "Rachel"];

const mixed = ["Friends", 1994, true, [25, 17], null];

mixed[1]; // or mixed["1"]
// Output: 1994
mixed[6];
//Output: undefined
```

More on this later

@[1]
@[1-3]
@[1-6]
@[1-8]

---

## Loops

```js
const characters = ["Chandler", "Joey", "Monica", "Ross", "Pheobe", "Rachel"];

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

@[1-5]
@[1, 6-9]
@[1, 11-15]

---

## Objects

Indexed using string

```js
const joey = {
  name: "Joey Tribbianni",
  catchphrase: `How you doin?`,
  relationships: ['Angela', 'Kathy', 'Katie', 'Ginger', 'Janine'];
  age: 26
};

joey.age            // "How you doing?"
joey.isGuestStar    // undefined
```

@[1-6]
@[1-9]

---

## You can loop over Objects too!

```js
for (const key in joey) {
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

function getCurrentRelationship(character) {
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
const getName = function(character) {
  return character.name;
};

const getName = function name(character) {
  return character.name;
};

const getName = (character) => {
  return character.name;
};

const getName = character => character.name;
```

@[1-3]
@[1-7]
@[1-11]
@[1-13]

---
