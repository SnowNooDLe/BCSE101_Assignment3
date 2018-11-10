/* globals Team, Game, View */
class Competition { // eslint-disable-line no-unused-vars
  constructor (newSponsor, newYear) {
    this.sponsor = newSponsor
    this.year = newYear
    this.allMyChampionshipTeams = []
    this.allMyPremiershipTeams = []
    this.allMyTeams = []
    this.allMyGames = []
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
    let foundGame
    for (let aGame of this.allMyGames) {
      // try to match the dateTime based on given addREsult.js but doesnt seem working
      // will provide photo of console.log seperate
      // console.log(aGame.when)
      // console.log(targetDateTime)
      // console.log(aGame.when - targetDateTime)
      // console.log(aGame.when == targetDateTime)
      if (aGame.myHomeTeam.rank === targetHomeTeamRank && aGame.myAwayTeam.rank === targetAwayTeamRank) {
        foundGame = aGame
      }
    }
    return foundGame
  }

  addResult (homeTeamRank, awayTeamRank, homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries) {
    // console.log(when)
    let aGame = this.findGame(homeTeamRank, awayTeamRank)
    // aGame.setResult(homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries)
    // console.log(aGame)
    if (homeTeamScore > awayTeamScore) {
      aGame.myHomeTeam.win += 1
      aGame.myAwayTeam.lose += 1
    }
    else if (homeTeamScore == awayTeamScore) {
      aGame.myHomeTeam.draw += 1
      aGame.myAwayTeam.draw += 1
    }
    else {
      aGame.myHomeTeam.lose += 1
      aGame.myAwayTeam.win += 1
    }
    aGame.addingScores(aGame, homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries)
    // console.log(aGame.myHomeTeam.lose)
  }

  getStandings() {
    let result = `${View.NEWLINE()}Get Standings ${View.NEWLINE()}Premiership Division${View.NEWLINE()}`
    // Mike emailed me to order in points, but unfortunately, points not working like we had issue during practical test.
    this.allMyPremiershipTeams.sort(function(a, b){return b.win-a.win});
    for (let aTeam of this.allMyPremiershipTeams) {
      aTeam.getDiff()
      aTeam.getPoints()
      result += `TEAM: ${aTeam.name} WIN: ${aTeam.win} DRAW: ${aTeam.draw} LOSS: ${aTeam.lose} | FOR: ${aTeam.for} AGAINST: ${aTeam.against} DIFF: ${aTeam.diff} `
      result += `| BP1: ${aTeam.BP1} BP2: ${aTeam.BP2} POINTS: ${aTeam.points} ${View.NEWLINE()}`
    }
    result += 'Championship Division' + View.NEWLINE()
    this.allMyChampionshipTeams.sort(function(a, b){return b.win-a.win});
    for (let aTeam of this.allMyChampionshipTeams) {
      aTeam.getDiff()
      aTeam.getPoints()
      result += `TEAM: ${aTeam.name} WIN: ${aTeam.win} DRAW: ${aTeam.draw} LOSS: ${aTeam.lose} | FOR: ${aTeam.for} AGAINST: ${aTeam.against} DIFF: ${aTeam.diff} `
      result += `| BP1: ${aTeam.BP1} BP2: ${aTeam.BP2} POINTS: ${aTeam.points} ${View.NEWLINE()}`
    }
    return result
  }
  // --------------------------------------------------------------------------

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
      result += aGame.getResult() + View.NEWLINE()
    }
    return result
  }
  getCanterburyGames () {
    let result = `${View.NEWLINE()}CANTERBURY GAMES${View.NEWLINE()}`
    for (let aGame of this.allMyGames) {
      if (aGame.hasTeam('Canterbury')) {
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
    let result = this.getDivisions()
    result += this.getGames()
    // result += this.getCanterburyGames()
    // result += this.getCrossOverGames()
    result += this.getStandings()
    return result
  }
}
