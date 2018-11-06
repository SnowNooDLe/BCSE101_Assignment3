class Team(object):
    def __init__(self, new_rank, new_name, new_venue, new_city):
        self.rank = new_rank
        self.name = new_name
        self.venue = new_venue
        self.city = new_city
    #     added code
        self.win = 0
        self.draw = 0
        self.lose = 0
        self.scored = 0
        self.against = 0
        self.diff = 0
        self.tries = 0
        self.BP1 = 0
        self.BP2 = 0
        self.points = 0


    def __str__(self):
        return self.name

    def get_venue(self):
        return self.venue.ljust(35) + self.city

    def getDiff(self):
        self.diff = self.scored - self.against

    def getPoints(self):
        self.points = self.win * 4 + self.draw + self.BP1 + self.BP2
