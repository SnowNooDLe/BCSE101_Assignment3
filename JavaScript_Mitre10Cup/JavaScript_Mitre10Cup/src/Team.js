class Team { // eslint-disable-line no-unused-vars
  constructor (newRank, newName, newVenue, newCity) {
    this.rank = newRank
    this.name = newName
    this.venue = newVenue
    this.city = newCity
    // added code
    this.win = 0
    this.draw = 0
    this.lose = 0
    this.for = 0
    this.against = 0
    this.diff = 0
  }
  getVenue () {
    return `${this.venue} ${this.city}`
  }
  toString () {
    return `${this.rank} ${this.name}`
  }
 }
