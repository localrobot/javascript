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
