const joey = new Character('Joey Tribbiani', 26, "How you doin'?");

console.log(joey.getLastRelationship()); // undefined

joey.updateRelationship('Angela');
joey.updateRelationship('Kathy');

console.log(joey.getLastRelationship()); // "Kathy"
