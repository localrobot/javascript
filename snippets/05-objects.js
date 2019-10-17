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
