function Ross(age, catchphrase) {
  Character.call(this, "Ross Geller", age, catchphrase);
  this.marriedTo = null;
  this.divorces = [];
}
Ross.prototype = Object.create(Character.prototype);
Ross.prototype.constructor = Ross;

Ross.prototype.marry = (name) => this.updateRelationship(name, true);

Ross.prototype.updateRelationship = (name, isGettingMarried) => {
  if (isGettingMarried) { this.marriedTo = name; }
  Character.prototype.updateRelationship.call(this, name);
}

Ross.prototype.divorce = () => {
  this.divorces.push(this.marriedTo);
  this.marriedTo = null
}
