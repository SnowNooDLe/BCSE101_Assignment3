/* globals View */
class Game {  // eslint-disable-line no-unused-vars
  constructor (newRound, theHomeTeam, theAwayTeam, newWhen) {
    this.round = newRound
    this.when = newWhen
    this.myHomeTeam = theHomeTeam
    // added code
    this.homeTeamScore = 0
    this.awayTeamScore = 0
    this.homeTeamTries = 0
    this.awayTeamTries = 0

    this.myAwayTeam = theAwayTeam
    if (theHomeTeam) {
      this.venue = theHomeTeam.getVenue()
    } else {
      this.venue = ''
    }
  }

  setResult (newTeamAScore, newTeamBScore) {
    this.homeTeamScore = newTeamAScore
    this.awayTeamScore = newTeamBScore
  }

  getDate (aDate) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = days[aDate.getDay()]
    let date = aDate.getDate()
    let result = `${day} ${date}`
    return result
  }
  getTime (aDate) {
    let h = aDate.getHours()
    let m = aDate.getMinutes()
    let result = `${h}.${m}pm`
    return result
  }
  getMonth (aDate) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[aDate.getMonth()]
  }
  getSunday () {
    let daysToSunday = 6 - this.when.getDay()
    let sunday = new Date(this.when)
    sunday.setDate(this.when.getDate() + daysToSunday)
    return `${this.getDate(sunday)} ${this.getMonth(sunday)}`
  }
  getWhen () {
    return `${this.getDate(this.when)} ${this.getMonth(this.when)}`
  }
  toString () {
    let result = this.getDate(this.when)
    let paddingNeeded = 13 - result.length
    let padding = View.SPACES(paddingNeeded)
    result += padding
    result += `${this.getTime(this.when)}${View.SPACES(2)}${this.myHomeTeam.name} v ${this.myAwayTeam.name} at ${this.venue}`
    return result
  }
  get () {
    let result = this.getDate(this.when)
    let paddingNeeded = 13 - result.length
    let padding = View.SPACES(paddingNeeded)
    result += padding
    result += `${this.getTime(this.when)} ${this.getMonth(this.when)}${View.NEWLINE()}${View.TAB()}${this.myHomeTeam.name} v ${this.myAwayTeam.name} at ${this.venue}`
    return result
  }
  // added code
  getResult () {
    let result = this.getDate(this.when)
    let paddingNeeded = 13 - result.length
    let padding = View.SPACES(paddingNeeded)
    result += padding
    // console.log("Whats my score")
    // console.log(this.homeTeamScore)
    result += `Result is ${this.myHomeTeam.name} ${this.homeTeamScore} : ${this.awayTeamScore} ${this.myAwayTeam.name}`
    // console.log(result)
    return result
  }

  addingScores (aGame, homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries) {
    this.setResult(homeTeamScore, awayTeamScore)
    aGame.myHomeTeam.for += homeTeamScore
    aGame.myHomeTeam.against += awayTeamScore
    if (homeTeamTries >= 4) {
      aGame.myHomeTeam.BP1 += 1
    }

    if (awayTeamScore - homeTeamScore <= 7 && awayTeamScore - homeTeamScore >= 1 ) {
      aGame.myHomeTeam.BP2 += 1
    }

    aGame.myAwayTeam.for += awayTeamScore
    aGame.myAwayTeam.against += homeTeamScore
    if (awayTeamTries >= 4) {
      aGame.myAwayTeam.BP1 += 1
    }

    if (homeTeamScore - awayTeamScore <= 7 && homeTeamScore - awayTeamScore >= 1 ) {
      aGame.myAwayTeam.BP2 += 1
    }
  }
  // --------------------------------------------------------------------------
  hasTeam (targetTeamName) {
    return this.myHomeTeam.name === targetTeamName || this.myAwayTeam.name === targetTeamName
  }
  isCrossOver () {
    let homeDivision = Math.trunc((this.myHomeTeam.rank - 1) / 7)
    let awayDivision = Math.trunc((this.myAwayTeam.rank - 1) / 7)
    let isDifferentDivision = homeDivision !== awayDivision
    return isDifferentDivision
  }
}
