from competition import Competition
import json


def setup():
    a_competition = Competition('Mitre 10 Cup', 2018)
    competition_data = json.loads(open('json.txt').read())
    all_teams = competition_data['teams']
    for team in all_teams:
        a_competition.add_team(team['rank'], team['name'], team['venue'], team['city'])
    all_games = competition_data['games']
    for game in all_games:
        a_competition.add_game(game['week'], game['homeTeamRank'], game['awayTeamRank'], game['dateTime'])
    return a_competition


if __name__ == '__main__':
    the_2018_competition = setup()
    print(the_2018_competition)
