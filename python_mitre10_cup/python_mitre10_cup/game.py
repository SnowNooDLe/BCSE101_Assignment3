class Game(object):
    def __init__(self, new_week, the_home_team, the_away_team, new_date):
        self.week = new_week
        self.when = new_date
        self.home_team = the_home_team
        self.away_team = the_away_team
        self.homeTeamScore = 0
        self.awayTeamScore = 0
        if the_home_team:
            self.venue = the_home_team.get_venue()

        else:  # is this needed if NOT adding the semis and finals?
            self.venue = ''

    def __str__(self):
        date = self.when.strftime('%A %d')
        date = date.ljust(15)
        date += self.when.strftime('%I.%M%p')
        result = f'\t{date}\t{self.home_team} v {self.away_team}'
        result = result.ljust(60)
        result += self.venue
        return result

    def get(self):
        date = self.when.strftime('%A %d %B')
        date = date.ljust(25)
        date += self.when.strftime('%I.%M%p')
        result = f'\t{date}\t{self.home_team} v {self.away_team}'
        result = result.ljust(70)
        result += self.venue
        return result

    def has_team(self, target_team_name):
        return self.home_team.name == target_team_name or self.away_team.name == target_team_name

    def is_crossover(self):
        home_division = (self.home_team.rank - 1) // 7
        away_division = (self.away_team.rank - 1 ) // 7
        is_different_division = home_division != away_division
        return is_different_division

    def set_result(self, newTeamAScore, newTeamBScore):
        self.homeTeamScore = newTeamAScore
        self.awayTeamScore = newTeamBScore

#    code added by Tom Son
    def adding_scores (self, aGame, homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries):
        self.set_result(homeTeamScore, awayTeamScore)
        aGame.home_team.scored += homeTeamScore
        aGame.home_team.against += awayTeamScore
        if (homeTeamTries >= 4):
            aGame.home_team.BP1 += 1

        if (awayTeamScore - homeTeamScore <= 7 and awayTeamScore - homeTeamScore >= 1):
            aGame.home_team.BP2 += 1

        aGame.away_team.scored += awayTeamScore
        aGame.away_team.against += homeTeamScore
        if (awayTeamTries >= 4):
            aGame.away_team.BP1 += 1

        if (homeTeamScore - awayTeamScore <= 7 and homeTeamScore - awayTeamScore >= 1):
            aGame.away_team.BP2 += 1


