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
    this.tries = 0
    this.BP1 = 0
    this.BP2 = 0
    this.points = 0
  }
  // added code
  getDiff (){
    this.diff = this.for - this.against
  }
  getPoints (){
    this.points = this.win * 4 + this.draw + this.BP1 + this.BP2

  }
  getVenue () {
    return `${this.venue} ${this.city}`
  }
  toString () {
    return `${this.rank} ${this.name}`
  }
 }
