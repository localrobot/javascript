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
