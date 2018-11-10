/* globals Team, Game, View */
class Competition { // eslint-disable-line no-unused-vars
  constructor (newSponsor, newYear) {
    this.sponsor = newSponsor
    this.year = newYear
    this.allMyChampionshipTeams = []
    this.allMyPremiershipTeams = []
    this.allMyTeams = []
    this.allMyGames = []

    this.allMyResults = []
  }
  addTeam (newRank, newName, newHome, newCity) {
    let aNewTeam = new Team(newRank, newName, newHome, newCity)
    this.allMyTeams.push(aNewTeam)
    if (newRank <= 7) {
      this.allMyPremiershipTeams.push(aNewTeam)
    } else {
      this.allMyChampionshipTeams.push(aNewTeam)
    }
  }

  findTeamByRank (targetRank) {
    return this.allMyTeams.find((team) => { return team.rank === targetRank })
  }

  // added code
  findGame (targetHomeTeamRank, targetAwayTeamRank) {
    let foundGame = NONE
    for (let aGame of this.allMyGames) {
      if (aGame.myHomeTeam.rank === targetHomeTeamRank && aGame.myAwayTeam.rank === targetAwayTeamRank) {
        foundGame = aGame
      }
    }
    return foundGame
  }

  setResult() {
    
  }
  // until here
  addGame (newRound, newHomeTeamRank, newAwayTeamRank, newWhenString) { // newYear, newMonth, newDay, newMinute) {
    // let when = new Date(newYear, newMonth, newDay, newMinute)
    let when = new Date(newWhenString)
    let theHomeTeam = this.findTeamByRank(newHomeTeamRank)
    let theAwayTeam = this.findTeamByRank(newAwayTeamRank)
    let aNewGame = new Game(newRound, theHomeTeam, theAwayTeam, when)
    this.allMyGames.push(aNewGame)
  }
  getDivisions () {
    let result = `${View.NEWLINE()}TEAMS${View.NEWLINE()}Premiership Division${View.NEWLINE()}`
    for (let aTeam of this.allMyPremiershipTeams) {
      result += `${aTeam.rank} ${aTeam.name} ${View.NEWLINE()}`
    }
    result += 'Championship Division' + View.NEWLINE()
    for (let aTeam of this.allMyChampionshipTeams) {
      result += `${aTeam.rank} ${aTeam.name} ${View.NEWLINE()}`
    }
    return result
  }
  getGames () {
    let result = `${View.NEWLINE()}GAMES${View.NEWLINE()}`
    let week = 0
    for (let aGame of this.allMyGames) {
      if (aGame.week !== week) {
        week += 1
        result += `Week ${week}. ${aGame.getWhen()} - ${aGame.getSunday()}${View.NEWLINE()}`
      }
      result += aGame + View.NEWLINE()
    }
    return result
  }
  getCanterburyGames () {
    let result = `${View.NEWLINE()}CANTERBURY GAMES${View.NEWLINE()}`
    for (let aGame of this.allMyGames) {
      if (aGame.hasTeam('Canterbury')) {
        console.log(this.allMyGames.indexOf(aGame))
        result += aGame.get() + View.NEWLINE()
      }
    }
    return result
  }

  getCrossOverGames () {
    let result = `${View.NEWLINE()}CROSS OVER GAMES${View.NEWLINE()}`
    for (let aGame of this.allMyGames) {
      if (aGame.isCrossOver()) {
        result += aGame.get() + View.NEWLINE()
      }
    }
    return result
  }
  getAll () {
    let result = this.getGames()
    // let result = this.getDivisions()
    // result += this.getGames()
    // result += this.getCanterburyGames()
    // result += this.getCrossOverGames()
    return result
  }
}
