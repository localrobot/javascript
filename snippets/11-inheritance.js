class Ross extends Character {
  constructor(age, catchphrase) {
    super('Ross Geller', age, catchphrase);
    this.marriedTo = null;
    this.divorces = [];
  }

  updateRelationship(name, isGettingMarried) {
    if (isGettingMarried) {
      this.marriedTo = name;
    }
    super.updateRelationship(name);
  }

  // public class field syntax
  marry = name => this.updateRelationship(name, true);

  divorce() {
    this.divorces.push(this.marriedTo);
    this.marriedTo = null;
  }
}
