// functions too are objects!
const getName = function name(character) {
  return character.name;
};

const getName = function (character) {
  return character.name;
};

const getName = (character) => {
  return character.name;
};

const getName = character => character.name;

const getAge = character => ({ age: character.age });
