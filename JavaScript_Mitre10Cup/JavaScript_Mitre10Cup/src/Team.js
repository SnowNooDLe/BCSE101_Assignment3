class Team { // eslint-disable-line no-unused-vars
  constructor (newRank, newName, newVenue, newCity) {
    this.rank = newRank
    this.name = newName
    this.venue = newVenue
    this.city = newCity
  }
  getVenue () {
    return `${this.venue} ${this.city}`
  }
  toString () {
    return `${this.rank} ${this.name}`
  }
 }
 