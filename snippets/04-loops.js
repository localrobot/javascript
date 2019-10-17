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
