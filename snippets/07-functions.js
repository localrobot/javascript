function updateRelationship(character, name) {
  character.relationships.push(name);
}

function getLastRelationship(character) {
  const relationships = character.relationships;
  return relationships[relationships.length - 1];
}
