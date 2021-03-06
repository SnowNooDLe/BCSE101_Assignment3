from team import Team
from game import Game
import datetime

class Competition(object):
    def __init__(self, new_sponsor, new_year):
        self.sponsor = new_sponsor
        self.year = new_year
        self.all_premiership_teams = []
        self.all_championship_teams = []
        self.all_games = []
        self.all_teams = []
        self.teamCount = 0  # used to separate Premiership and Championship teams by rank
        self.allMyResults = []

    def add_team(self, new_rank, new_name, new_venue, new_city):
        self.teamCount += 1
        a_new_team = Team(new_rank, new_name, new_venue, new_city)
        self.all_teams.append(a_new_team)
        if self.teamCount <= 7:
            self.all_premiership_teams.append(a_new_team)
        else:
            self.all_championship_teams.append(a_new_team)

    def get_team_by_rank(self, target_rank):
        return self.all_teams[target_rank]

    #    code added by Tom Son
    def find_game_add_result(self, homeTeamRank, awayTeamRank, homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries):
        for aGame in self.all_games:
            if (aGame.home_team.rank == homeTeamRank and aGame.away_team.rank == awayTeamRank):
                # aGame.set_result(homeTeamScore, awayTeamScore)
                if (homeTeamScore > awayTeamScore):
                    aGame.home_team.win += 1
                    aGame.away_team.lose += 1

                elif (homeTeamScore == awayTeamScore):
                    aGame.home_team.draw += 1
                    aGame.away_team.draw += 1

                else:
                    aGame.home_team.lose += 1
                    aGame.away_team.win += 1

                aGame.adding_scores(aGame, homeTeamScore, awayTeamScore, homeTeamTries, awayTeamTries)

    #  ----------------------------------------------------------------------------------------------------------------

    def add_game(self, new_round, new_home_team_rank, new_away_team_rank, new_when_is8601string):
        import dateutil.parser
        when = dateutil.parser.parse(new_when_is8601string)
        home_team = self.get_team_by_rank(new_home_team_rank - 1)
        away_team = self.get_team_by_rank(new_away_team_rank - 1)
        a_new_game = Game(new_round, home_team, away_team, when)
        self.all_games.append(a_new_game)

    def get_divisions(self):
        result = '\nTEAMS\nPremiership Division\n'
        for team in self.all_premiership_teams:
            result += f'\t{team.rank} {team.name}\n'
        result += 'Championship Division\n'
        for team in self.all_championship_teams:
            result += f'\t{team.rank} {team.name}\n'
        return result

    def get_games(self):
        result = '\nGAMES\n'
        week = 0
        for a_game in self.all_games:
            if a_game.week != week:
                week += 1
                pretty_first_game_date = a_game.when.strftime('%A %d %B')
                sunday_date = a_game.when + datetime.timedelta(6-a_game.when.weekday())
                pretty_sunday_date = sunday_date.strftime('%A %d %B')
                result += f'Week {week}. {pretty_first_game_date} - {pretty_sunday_date}\n'
            result += str(a_game) + '\n'
            #    code added by Tom Son
            result += f'\t{str(a_game.home_team.name)} {str(a_game.homeTeamScore)} : {str(a_game.awayTeamScore)} {str(a_game.away_team.name)} \n'
        return result

    def get_canterbury_games(self):
        result = 'CANTERBURY GAMES\n'
        for a_game in self.all_games:
            if a_game.has_team('Canterbury'):
                result += a_game.get() + '\n'
        return result

    def get_cross_over_games(self):
        result = '\nCROSS OVER GAMES\n'
        for a_game in self.all_games:
            if a_game.is_crossover():
                result += a_game.get() + '\n'
        return result
    #    code added by Tom Son
    def get_standings(self):
        result = '\nGet Standings\nPremiership Division\n'
        self.all_premiership_teams.sort(key=lambda team: team.win, reverse=True)
        for team in self.all_premiership_teams:
            team.getDiff()
            team.getPoints()
            result += f'\t{team.name} {team.win} {team.draw} {team.lose} | {team.scored} {team.against} {team.diff} | {team.BP1} {team.BP2} {team.points}\n'
        result += 'Championship Division\n'
        self.all_championship_teams.sort(key=lambda team: team.win, reverse=True)
        for team in self.all_championship_teams:
            team.getDiff()
            team.getPoints()
            result += f'\t{team.name} {team.win} {team.draw} {team.lose} | {team.scored} {team.against} {team.diff} | {team.BP1} {team.BP2} {team.points}\n'
        return result

    def __str__(self):
        result = self.get_divisions()
        result += self.get_games()
        # result += self.get_canterbury_games()
        # result += self.get_cross_over_games()
        result += self.get_standings()
        return result

    def get(self):
        result = []
        for g in self.all_games:
            result.append( g.when.isformat(), g.home_team.rank,  g.away_team.rank)
