function Character(name, age, catchphrase) {
  this.name = name;
  this.age = age;
  this.catchphrase = catchphrase;
  this.relationships = [];
}
Character.prototype.updateRelationship = function (name) {
  this.relationships.push(name);
};

Character.prototype.getLastRelationship = () => this.relationships[this.relationships.length - 1];
