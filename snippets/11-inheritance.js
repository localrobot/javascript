class Ross extends Character {
  constructor(age, catchphrase) {
    super('Ross Geller', age, catchphrase);
    this.marriedTo = null;
    this.divorces = [];
  }

  marry = name => this.updateRelationship(name, true);

  updateRelationship(name, isGettingMarried) {
    if (isGettingMarried) {
      this.marriedTo = name;
    }
    super.updateRelationship(name);
  }

  divorce() {
    this.divorces.push(this.marriedTo);
    this.marriedTo = null;
  }
}
