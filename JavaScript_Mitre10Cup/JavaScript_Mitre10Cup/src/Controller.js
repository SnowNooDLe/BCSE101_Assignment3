/* globals Competition */
class Controller { // eslint-disable-line no-unused-vars
  static getJSON () {
    /* team data is from http://www.mitre10cup.co.nz/Competition/Index/3747
     * game data is from http://www.mitre10cup.co.nz/Fixtures
    */
    return {
      'teams': [
        {
          'rank': 1,
          'name': 'Canterbury',
          'venue': 'Christchurch Stadium',
          'city': 'Christchurch'
        },
        {
          'rank': 2,
          'name': 'Tasman',
          'venue': 'Lansdowne Park',
          'city': 'Blenheim'
        },
        {
          'rank': 3,
          'name': 'Taranaki',
          'venue': 'Yarrow Stadium',
          'city': 'New Plymouth'
        },
        {
          'rank': 4,
          'name': 'North Harbour',
          'venue': 'QBE Stadium',
          'city': 'North Harbour'
        },
        {
          'rank': 5,
          'name': 'Counties Manukau',
          'venue': 'ECOLight Stadium',
          'city': 'Pukekohe'
        },
        {
          'rank': 6,
          'name': 'Auckland',
          'venue': 'Eden Park',
          'city': 'Auckland'
        },
        {
          'rank': 7,
          'name': 'Wellington',
          'venue': 'Westpac Stadium',
          'city': 'Wellington'
        },
        {
          'rank': 8,
          'name': 'Waikato',
          'venue': 'FMG Stadium Waikato',
          'city': 'Hamilton'
        },
        {
          'rank': 9,
          'name': 'Bay of Plenty',
          'venue': 'Rotorua International Stadium',
          'city': 'Rotorua'
        },
        {
          'rank': 10,
          'name': 'Otago',
          'venue': 'Forsyth Barr Stadium',
          'city': 'Dunedin'
        },
        {
          'rank': 11,
          'name': 'Northland',
          'venue': 'Toll Stadium',
          'city': 'Whangarei'
        },
        {
          'rank': 12,
          'name': 'Manawatu',
          'venue': 'Central Energy Trust Arena',
          'city': 'Palmerston North'
        },
        {
          'rank': 13,
          'name': 'Hawkes Bay',
          'venue': 'McLean Park',
          'city': 'Napier'
        },
        {
          'rank': 14,
          'name': 'Southland',
          'venue': 'Rugby Park',
          'city': 'Invercargill'
        }
      ],
      'games': [
        {
          'week': 1,
          'homeTeamRank': 4,
          'awayTeamRank': 11,
          'dateTime': '2018-08-16T19:35:00.000Z'
        },
        {
          'week': 1,
          'homeTeamRank': 2,
          'awayTeamRank': 1,
          'dateTime': '2018-08-17T19:35:00.000Z'
        },
        {
          'week': 1,
          'homeTeamRank': 12,
          'awayTeamRank': 8,
          'dateTime': '2018-08-18T14:35:00.000Z'
        },
        {
          'week': 1,
          'homeTeamRank': 6,
          'awayTeamRank': 5,
          'dateTime': '2018-08-18T17:05:00.000Z'
        },
        {
          'week': 1,
          'homeTeamRank': 9,
          'awayTeamRank': 3,
          'dateTime': '2018-08-18T19:35:00.000Z'
        },
        {
          'week': 1,
          'homeTeamRank': 7,
          'awayTeamRank': 10,
          'dateTime': '2018-08-19T14:05:00.000Z'
        },
        {
          'week': 1,
          'homeTeamRank': 14,
          'awayTeamRank': 13,
          'dateTime': '2018-08-19T16:35:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 5,
          'awayTeamRank': 9,
          'dateTime': '2018-08-23T19:35:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 10,
          'awayTeamRank': 13,
          'dateTime': '2018-08-24T17:45:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 3,
          'awayTeamRank': 12,
          'dateTime': '2018-08-24T19:45:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 1,
          'awayTeamRank': 7,
          'dateTime': '2018-08-25T14:05:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 8,
          'awayTeamRank': 4,
          'dateTime': '2018-08-25T16:35:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 2,
          'awayTeamRank': 14,
          'dateTime': '2018-08-26T14:05:00.000Z'
        },
        {
          'week': 2,
          'homeTeamRank': 11,
          'awayTeamRank': 6,
          'dateTime': '2018-08-26T16:35:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 5,
          'awayTeamRank': 3,
          'dateTime': '2018-08-29T19:35:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 6,
          'awayTeamRank': 8,
          'dateTime': '2018-08-30T19:35:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 7,
          'awayTeamRank': 14,
          'dateTime': '2018-08-31T19:35:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 9,
          'awayTeamRank': 1,
          'dateTime': '2018-09-01T14:35:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 12,
          'awayTeamRank': 10,
          'dateTime': '2018-09-01T05:05:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 4,
          'awayTeamRank': 12,
          'dateTime': '2018-09-01T19:35:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 13,
          'awayTeamRank': 5,
          'dateTime': '2018-09-02T14:05:00.000Z'
        },
        {
          'week': 3,
          'homeTeamRank': 11,
          'awayTeamRank': 3,
          'dateTime': '2018-09-02T16:35:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 8,
          'awayTeamRank': 7,
          'dateTime': '2018-09-05T19:35:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 1,
          'awayTeamRank': 12,
          'dateTime': '2018-09-06T19:35:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 10,
          'awayTeamRank': 11,
          'dateTime': '2018-09-07T05:45:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 6,
          'awayTeamRank': 2,
          'dateTime': '2018-09-07T19:45:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 14,
          'awayTeamRank': 5,
          'dateTime': '2018-09-08T14:05:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 13,
          'awayTeamRank': 9,
          'dateTime': '2018-09-08T16:35:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 7,
          'awayTeamRank': 4,
          'dateTime': '2018-09-09T14:05:00.000Z'
        },
        {
          'week': 4,
          'homeTeamRank': 3,
          'awayTeamRank': 8,
          'dateTime': '2018-09-09T16:35:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 4,
          'awayTeamRank': 1,
          'dateTime': '2018-09-12T19:35:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 8,
          'awayTeamRank': 13,
          'dateTime': '2018-09-13T19:35:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 11,
          'awayTeamRank': 12,
          'dateTime': '2018-09-14T05:45:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 2,
          'awayTeamRank': 3,
          'dateTime': '2018-09-14T19:45:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 5,
          'awayTeamRank': 7,
          'dateTime': '2018-09-15T14:05:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 14,
          'awayTeamRank': 10,
          'dateTime': '2018-09-15T16:35:00.000Z'
        },
        {
          'week': 5,
          // to check later whether it was 14 or 4
          'homeTeamRank': 4,
          'awayTeamRank': 9,
          'dateTime': '2018-09-16T14:05:00.000Z'
        },
        {
          'week': 5,
          'homeTeamRank': 1,
          'awayTeamRank': 6,
          'dateTime': '2018-09-16T16:35:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 12,
          'awayTeamRank': 2,
          'dateTime': '2018-09-19T19:35:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 11,
          'awayTeamRank': 14,
          'dateTime': '2018-09-20T19:35:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 9,
          'awayTeamRank': 8,
          'dateTime': '2018-09-21T19:35:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 13,
          'awayTeamRank': 4,
          'dateTime': '2018-09-22T14:35:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 10,
          'awayTeamRank': 1,
          'dateTime': '2018-09-22T17:05:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 3,
          'awayTeamRank': 6,
          'dateTime': '2018-09-22T19:35:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 2,
          'awayTeamRank': 5,
          'dateTime': '2018-09-23T14:05:00.000Z'
        },
        {
          'week': 6,
          'homeTeamRank': 12,
          'awayTeamRank': 7,
          'dateTime': '2018-09-23T16:35:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 13,
          'awayTeamRank': 11,
          'dateTime': '2018-09-26T19:35:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 9,
          'awayTeamRank': 12,
          'dateTime': '2018-09-27T19:35:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 6,
          'awayTeamRank': 10,
          'dateTime': '2018-09-28T19:35:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 8,
          'awayTeamRank': 14,
          'dateTime': '2018-09-29T14:35:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 3,
          'awayTeamRank': 4,
          'dateTime': '2018-09-29T17:05:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 7,
          'awayTeamRank': 2,
          'dateTime': '2018-09-29T19:35:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 1,
          'awayTeamRank': 13,
          'dateTime': '2018-09-30T14:05:00.000Z'
        },
        {
          'week': 7,
          'homeTeamRank': 5,
          'awayTeamRank': 11,
          'dateTime': '2018-09-30T16:35:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 10,
          'awayTeamRank': 9,
          'dateTime': '2018-10-03T19:35:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 7,
          'awayTeamRank': 6,
          'dateTime': '2018-10-04T19:35:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 13,
          'awayTeamRank': 12,
          'dateTime': '2018-10-05T19:35:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 11,
          'awayTeamRank': 8,
          'dateTime': '2018-10-06T14:35:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 4,
          'awayTeamRank': 5,
          'dateTime': '2018-10-06T17:05:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 1,
          'awayTeamRank': 3,
          'dateTime': '2018-10-06T19:35:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 14,
          'awayTeamRank': 9,
          'dateTime': '2018-10-07T14:05:00.000Z'
        },
        {
          'week': 8,
          'homeTeamRank': 10,
          'awayTeamRank': 2,
          'dateTime': '2018-10-07T16:35:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 14,
          'awayTeamRank': 6,
          'dateTime': '2018-10-10T19:35:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 2,
          'awayTeamRank': 13,
          'dateTime': '2018-10-11T19:35:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 3,
          'awayTeamRank': 7,
          'dateTime': '2018-10-12T19:35:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 9,
          'awayTeamRank': 11,
          'dateTime': '2018-10-13T14:35:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 8,
          'awayTeamRank': 10,
          'dateTime': '2018-10-13T17:05:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 5,
          'awayTeamRank': 1,
          'dateTime': '2018-10-13T19:35:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 6,
          'awayTeamRank': 4,
          'dateTime': '2018-10-14T14:05:00.000Z'
        },
        {
          'week': 9,
          'homeTeamRank': 12,
          'awayTeamRank': 14,
          'dateTime': '2018-10-14T16:35:00.000Z'
        }
      ]
    }
  }

  static getResultJSON () {
    return{
          "results":[
            {
                "week":1,
                "dateTime":"2018-08-16T19:35:00+00:00",
                "homeTeamRank":4,
                "awayTeamRank":11,
                "homeTeamScore":21,
                "awayTeamScore":20,
                "homeTeamTries":2,
                "awayTeamTries":1
            },
            {
                "week":1,
                "dateTime":"2018-08-17T19:35:00+00:00",
                "homeTeamRank":2,
                "awayTeamRank":1,
                "homeTeamScore":25,
                "awayTeamScore":17,
                "homeTeamTries":3,
                "awayTeamTries":1
            },
            {
                "week":1,
                "dateTime":"2018-08-18T14:35:00+00:00",
                "homeTeamRank":12,
                "awayTeamRank":8,
                "homeTeamScore":24,
                "awayTeamScore":19,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":1,
                "dateTime":"2018-08-18T17:05:00+00:00",
                "homeTeamRank":6,
                "awayTeamRank":5,
                "homeTeamScore":23,
                "awayTeamScore":19,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":1,
                "dateTime":"2018-08-18T19:35:00+00:00",
                "homeTeamRank":9,
                "awayTeamRank":3,
                "homeTeamScore":30,
                "awayTeamScore":10,
                "homeTeamTries":3,
                "awayTeamTries":1
            },
            {
                "week":1,
                "dateTime":"2018-08-19T14:05:00+00:00",
                "homeTeamRank":7,
                "awayTeamRank":10,
                "homeTeamScore":34,
                "awayTeamScore":16,
                "homeTeamTries":4,
                "awayTeamTries":1
            },
            {
                "week":1,
                "dateTime":"2018-08-19T16:35:00+00:00",
                "homeTeamRank":14,
                "awayTeamRank":13,
                "homeTeamScore":10,
                "awayTeamScore":31,
                "homeTeamTries":1,
                "awayTeamTries":4
            },
            {
                "week":2,
                "dateTime":"2018-08-23T19:35:00+00:00",
                "homeTeamRank":5,
                "awayTeamRank":9,
                "homeTeamScore":17,
                "awayTeamScore":22,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":2,
                "dateTime":"2018-08-24T17:45:00+00:00",
                "homeTeamRank":10,
                "awayTeamRank":13,
                "homeTeamScore":25,
                "awayTeamScore":31,
                "homeTeamTries":3,
                "awayTeamTries":5
            },
            {
                "week":2,
                "dateTime":"2018-08-24T19:45:00+00:00",
                "homeTeamRank":3,
                "awayTeamRank":12,
                "homeTeamScore":41,
                "awayTeamScore":21,
                "homeTeamTries":5,
                "awayTeamTries":3
            },
            {
                "week":2,
                "dateTime":"2018-08-25T14:05:00+00:00",
                "homeTeamRank":1,
                "awayTeamRank":7,
                "homeTeamScore":27,
                "awayTeamScore":20,
                "homeTeamTries":4,
                "awayTeamTries":2
            },
            {
                "week":2,
                "dateTime":"2018-08-25T16:35:00+00:00",
                "homeTeamRank":8,
                "awayTeamRank":4,
                "homeTeamScore":28,
                "awayTeamScore":29,
                "homeTeamTries":4,
                "awayTeamTries":4
            },
            {
                "week":2,
                "dateTime":"2018-08-26T14:05:00+00:00",
                "homeTeamRank":2,
                "awayTeamRank":14,
                "homeTeamScore":45,
                "awayTeamScore":24,
                "homeTeamTries":7,
                "awayTeamTries":4
            },
            {
                "week":2,
                "dateTime":"2018-08-26T16:35:00+00:00",
                "homeTeamRank":11,
                "awayTeamRank":6,
                "homeTeamScore":12,
                "awayTeamScore":28,
                "homeTeamTries":2,
                "awayTeamTries":4
            },
            {
                "week":3,
                "dateTime":"2018-08-29T19:35:00+00:00",
                "homeTeamRank":5,
                "awayTeamRank":3,
                "homeTeamScore":19,
                "awayTeamScore":26,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":3,
                "dateTime":"2018-08-30T19:35:00+00:00",
                "homeTeamRank":6,
                "awayTeamRank":8,
                "homeTeamScore":35,
                "awayTeamScore":17,
                "homeTeamTries":5,
                "awayTeamTries":3
            },
            {
                "week":3,
                "dateTime":"2018-08-31T19:35:00+00:00",
                "homeTeamRank":7,
                "awayTeamRank":14,
                "homeTeamScore":52,
                "awayTeamScore":7,
                "homeTeamTries":8,
                "awayTeamTries":1
            },
            {
                "week":3,
                "dateTime":"2018-09-01T14:35:00+00:00",
                "homeTeamRank":9,
                "awayTeamRank":1,
                "homeTeamScore":19,
                "awayTeamScore":31,
                "homeTeamTries":3,
                "awayTeamTries":4
            },
            {
                "week":3,
                "dateTime":"2018-09-01T05:05:00+00:00",
                "homeTeamRank":12,
                "awayTeamRank":10,
                "homeTeamScore":17,
                "awayTeamScore":50,
                "homeTeamTries":3,
                "awayTeamTries":7
            },
            {
                "week":3,
                "dateTime":"2018-09-01T19:35:00+00:00",
                "homeTeamRank":4,
                "awayTeamRank":12,
                "homeTeamScore":20,
                "awayTeamScore":32,
                "homeTeamTries":2,
                "awayTeamTries":4
            },
            {
                "week":3,
                "dateTime":"2018-09-02T14:05:00+00:00",
                "homeTeamRank":13,
                "awayTeamRank":5,
                "homeTeamScore":25,
                "awayTeamScore":29,
                "homeTeamTries":4,
                "awayTeamTries":4
            },
            {
                "week":3,
                "dateTime":"2018-09-02T16:35:00+00:00",
                "homeTeamRank":11,
                "awayTeamRank":3,
                "homeTeamScore":18,
                "awayTeamScore":17,
                "homeTeamTries":2,
                "awayTeamTries":2
            },
            {
                "week":4,
                "dateTime":"2018-09-05T19:35:00+00:00",
                "homeTeamRank":8,
                "awayTeamRank":7,
                "homeTeamScore":43,
                "awayTeamScore":31,
                "homeTeamTries":6,
                "awayTeamTries":5
            },
            {
                "week":4,
                "dateTime":"2018-09-06T19:35:00+00:00",
                "homeTeamRank":1,
                "awayTeamRank":12,
                "homeTeamScore":34,
                "awayTeamScore":23,
                "homeTeamTries":5,
                "awayTeamTries":2
            },
            {
                "week":4,
                "dateTime":"2018-09-07T05:45:00+00:00",
                "homeTeamRank":10,
                "awayTeamRank":11,
                "homeTeamScore":27,
                "awayTeamScore":23,
                "homeTeamTries":3,
                "awayTeamTries":2
            },
            {
                "week":4,
                "dateTime":"2018-09-07T19:45:00+00:00",
                "homeTeamRank":6,
                "awayTeamRank":2,
                "homeTeamScore":36,
                "awayTeamScore":10,
                "homeTeamTries":5,
                "awayTeamTries":1
            },
            {
                "week":4,
                "dateTime":"2018-09-08T14:05:00+00:00",
                "homeTeamRank":14,
                "awayTeamRank":5,
                "homeTeamScore":26,
                "awayTeamScore":43,
                "homeTeamTries":4,
                "awayTeamTries":6
            },
            {
                "week":4,
                "dateTime":"2018-09-08T16:35:00+00:00",
                "homeTeamRank":13,
                "awayTeamRank":9,
                "homeTeamScore":29,
                "awayTeamScore":28,
                "homeTeamTries":4,
                "awayTeamTries":3
            },
            {
                "week":4,
                "dateTime":"2018-09-09T14:05:00+00:00",
                "homeTeamRank":7,
                "awayTeamRank":4,
                "homeTeamScore":35,
                "awayTeamScore":23,
                "homeTeamTries":5,
                "awayTeamTries":2
            },
            {
                "week":4,
                "dateTime":"2018-09-09T16:35:00+00:00",
                "homeTeamRank":3,
                "awayTeamRank":8,
                "homeTeamScore":19,
                "awayTeamScore":33,
                "homeTeamTries":3,
                "awayTeamTries":5
            },
            {
                "week":5,
                "dateTime":"2018-09-12T19:35:00+00:00",
                "homeTeamRank":4,
                "awayTeamRank":1,
                "homeTeamScore":21,
                "awayTeamScore":31,
                "homeTeamTries":3,
                "awayTeamTries":4
            },
            {
                "week":5,
                "dateTime":"2018-09-13T19:35:00+00:00",
                "homeTeamRank":8,
                "awayTeamRank":13,
                "homeTeamScore":42,
                "awayTeamScore":22,
                "homeTeamTries":6,
                "awayTeamTries":3
            },
            {
                "week":5,
                "dateTime":"2018-09-14T05:45:00+00:00",
                "homeTeamRank":11,
                "awayTeamRank":12,
                "homeTeamScore":49,
                "awayTeamScore":19,
                "homeTeamTries":7,
                "awayTeamTries":4
            },
            {
                "week":5,
                "dateTime":"2018-09-14T19:45:00+00:00",
                "homeTeamRank":2,
                "awayTeamRank":3,
                "homeTeamScore":53,
                "awayTeamScore":17,
                "homeTeamTries":7,
                "awayTeamTries":2
            },
            {
                "week":5,
                "dateTime":"2018-09-15T14:05:00+00:00",
                "homeTeamRank":5,
                "awayTeamRank":7,
                "homeTeamScore":12,
                "awayTeamScore":53,
                "homeTeamTries":2,
                "awayTeamTries":8
            },
            {
                "week":5,
                "dateTime":"2018-09-15T16:35:00+00:00",
                "homeTeamRank":14,
                "awayTeamRank":10,
                "homeTeamScore":24,
                "awayTeamScore":43,
                "homeTeamTries":3,
                "awayTeamTries":7
            },
            {
                "week":5,
                "dateTime":"2018-09-16T14:05:00+00:00",
                "homeTeamRank":4,
                "awayTeamRank":9,
                "homeTeamScore":32,
                "awayTeamScore":20,
                "homeTeamTries":4,
                "awayTeamTries":2
            },
            {
                "week":5,
                "dateTime":"2018-09-16T16:35:00+00:00",
                "homeTeamRank":1,
                "awayTeamRank":6,
                "homeTeamScore":29,
                "awayTeamScore":34,
                "homeTeamTries":4,
                "awayTeamTries":5
            },
            {
                "week":6,
                "dateTime":"2018-09-19T19:35:00+00:00",
                "homeTeamRank":12,
                "awayTeamRank":2,
                "homeTeamScore":19,
                "awayTeamScore":29,
                "homeTeamTries":3,
                "awayTeamTries":4
            },
            {
                "week":6,
                "dateTime":"2018-09-20T19:35:00+00:00",
                "homeTeamRank":11,
                "awayTeamRank":14,
                "homeTeamScore":26,
                "awayTeamScore":10,
                "homeTeamTries":4,
                "awayTeamTries":2
            },
            {
                "week":6,
                "dateTime":"2018-09-21T19:35:00+00:00",
                "homeTeamRank":9,
                "awayTeamRank":8,
                "homeTeamScore":21,
                "awayTeamScore":54,
                "homeTeamTries":3,
                "awayTeamTries":8
            },
            {
                "week":6,
                "dateTime":"2018-09-22T14:35:00+00:00",
                "homeTeamRank":13,
                "awayTeamRank":4,
                "homeTeamScore":34,
                "awayTeamScore":51,
                "homeTeamTries":4,
                "awayTeamTries":7
            },
            {
                "week":6,
                "dateTime":"2018-09-22T17:05:00+00:00",
                "homeTeamRank":10,
                "awayTeamRank":1,
                "homeTeamScore":25,
                "awayTeamScore":47,
                "homeTeamTries":3,
                "awayTeamTries":7
            },
            {
                "week":6,
                "dateTime":"2018-09-22T19:35:00+00:00",
                "homeTeamRank":3,
                "awayTeamRank":6,
                "homeTeamScore":30,
                "awayTeamScore":31,
                "homeTeamTries":4,
                "awayTeamTries":5
            },
            {
                "week":6,
                "dateTime":"2018-09-23T14:05:00+00:00",
                "homeTeamRank":2,
                "awayTeamRank":5,
                "homeTeamScore":21,
                "awayTeamScore":19,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":6,
                "dateTime":"2018-09-23T16:35:00+00:00",
                "homeTeamRank":12,
                "awayTeamRank":7,
                "homeTeamScore":7,
                "awayTeamScore":49,
                "homeTeamTries":3,
                "awayTeamTries":9
            },
            {
                "week":7,
                "dateTime":"2018-09-26T19:35:00+00:00",
                "homeTeamRank":13,
                "awayTeamRank":11,
                "homeTeamScore":55,
                "awayTeamScore":41,
                "homeTeamTries":9,
                "awayTeamTries":5
            },
            {
                "week":7,
                "dateTime":"2018-09-27T19:35:00+00:00",
                "homeTeamRank":9,
                "awayTeamRank":12,
                "homeTeamScore":15,
                "awayTeamScore":17,
                "homeTeamTries":2,
                "awayTeamTries":2
            },
            {
                "week":7,
                "dateTime":"2018-09-28T19:35:00+00:00",
                "homeTeamRank":6,
                "awayTeamRank":10,
                "homeTeamScore":26,
                "awayTeamScore":31,
                "homeTeamTries":4,
                "awayTeamTries":5
            },
            {
                "week":7,
                "dateTime":"2018-09-29T14:35:00+00:00",
                "homeTeamRank":8,
                "awayTeamRank":14,
                "homeTeamScore":42,
                "awayTeamScore":11,
                "homeTeamTries":6,
                "awayTeamTries":1
            },
            {
                "week":7,
                "dateTime":"2018-09-29T17:05:00+00:00",
                "homeTeamRank":3,
                "awayTeamRank":4,
                "homeTeamScore":26,
                "awayTeamScore":55,
                "homeTeamTries":4,
                "awayTeamTries":9
            },
            {
                "week":7,
                "dateTime":"2018-09-29T19:35:00+00:00",
                "homeTeamRank":7,
                "awayTeamRank":2,
                "homeTeamScore":22,
                "awayTeamScore":28,
                "homeTeamTries":3,
                "awayTeamTries":4
            },
            {
                "week":7,
                "dateTime":"2018-09-30T14:05:00+00:00",
                "homeTeamRank":1,
                "awayTeamRank":13,
                "homeTeamScore":49,
                "awayTeamScore":24,
                "homeTeamTries":7,
                "awayTeamTries":3
            },
            {
                "week":7,
                "dateTime":"2018-09-30T16:35:00+00:00",
                "homeTeamRank":5,
                "awayTeamRank":11,
                "homeTeamScore":20,
                "awayTeamScore":24,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":8,
                "dateTime":"2018-10-03T19:35:00+00:00",
                "homeTeamRank":10,
                "awayTeamRank":9,
                "homeTeamScore":45,
                "awayTeamScore":34,
                "homeTeamTries":6,
                "awayTeamTries":5
            },
            {
                "week":8,
                "dateTime":"2018-10-04T19:35:00+00:00",
                "homeTeamRank":7,
                "awayTeamRank":6,
                "homeTeamScore":24,
                "awayTeamScore":29,
                "homeTeamTries":3,
                "awayTeamTries":4
            },
            {
                "week":8,
                "dateTime":"2018-10-05T19:35:00+00:00",
                "homeTeamRank":13,
                "awayTeamRank":12,
                "homeTeamScore":45,
                "awayTeamScore":17,
                "homeTeamTries":7,
                "awayTeamTries":2
            },
            {
                "week":8,
                "dateTime":"2018-10-06T14:35:00+00:00",
                "homeTeamRank":11,
                "awayTeamRank":8,
                "homeTeamScore":28,
                "awayTeamScore":71,
                "homeTeamTries":4,
                "awayTeamTries":11
            },
            {
                "week":8,
                "dateTime":"2018-10-06T17:05:00+00:00",
                "homeTeamRank":4,
                "awayTeamRank":5,
                "homeTeamScore":36,
                "awayTeamScore":26,
                "homeTeamTries":5,
                "awayTeamTries":4
            },
            {
                "week":8,
                "dateTime":"2018-10-06T19:35:00+00:00",
                "homeTeamRank":1,
                "awayTeamRank":3,
                "homeTeamScore":41,
                "awayTeamScore":7,
                "homeTeamTries":6,
                "awayTeamTries":1
            },
            {
                "week":8,
                "dateTime":"2018-10-07T14:05:00+00:00",
                "homeTeamRank":14,
                "awayTeamRank":9,
                "homeTeamScore":22,
                "awayTeamScore":26,
                "homeTeamTries":3,
                "awayTeamTries":4
            },
            {
                "week":8,
                "dateTime":"2018-10-07T16:35:00+00:00",
                "homeTeamRank":10,
                "awayTeamRank":2,
                "homeTeamScore":21,
                "awayTeamScore":47,
                "homeTeamTries":3,
                "awayTeamTries":7
            },
            {
                "week":9,
                "dateTime":"2018-10-10T19:35:00+00:00",
                "homeTeamRank":14,
                "awayTeamRank":6,
                "homeTeamScore":8,
                "awayTeamScore":56,
                "homeTeamTries":2,
                "awayTeamTries":8
            },
            {
                "week":9,
                "dateTime":"2018-10-11T19:35:00+00:00",
                "homeTeamRank":2,
                "awayTeamRank":13,
                "homeTeamScore":29,
                "awayTeamScore":0,
                "homeTeamTries":4,
                "awayTeamTries":0
            },
            {
                "week":9,
                "dateTime":"2018-10-12T19:35:00+00:00",
                "homeTeamRank":3,
                "awayTeamRank":7,
                "homeTeamScore":10,
                "awayTeamScore":34,
                "homeTeamTries":1,
                "awayTeamTries":5
            },
            {
                "week":9,
                "dateTime":"2018-10-13T14:35:00+00:00",
                "homeTeamRank":9,
                "awayTeamRank":11,
                "homeTeamScore":38,
                "awayTeamScore":35,
                "homeTeamTries":6,
                "awayTeamTries":5
            },
            {
                "week":9,
                "dateTime":"2018-10-13T17:05:00+00:00",
                "homeTeamRank":8,
                "awayTeamRank":10,
                "homeTeamScore":19,
                "awayTeamScore":23,
                "homeTeamTries":3,
                "awayTeamTries":3
            },
            {
                "week":9,
                "dateTime":"2018-10-13T19:35:00+00:00",
                "homeTeamRank":5,
                "awayTeamRank":1,
                "homeTeamScore":14,
                "awayTeamScore":19,
                "homeTeamTries":2,
                "awayTeamTries":3
            },
            {
                "week":9,
                "dateTime":"2018-10-14T14:05:00+00:00",
                "homeTeamRank":6,
                "awayTeamRank":4,
                "homeTeamScore":45,
                "awayTeamScore":29,
                "homeTeamTries":7,
                "awayTeamTries":4
            },
            {
                "week":9,
                "dateTime":"2018-10,-4T16:35:00+00:00",
                "homeTeamRank":12,
                "awayTeamRank":14,
                "homeTeamScore":38,
                "awayTeamScore":26,
                "homeTeamTries":5,
                "awayTeamTries":4
            }


           ]
        }

  }

  static setup () {
    let the2018Competition = new Competition('Mitre 10 Cup', 2018)
    let competitionData = Controller.getJSON()

    let allTeams = competitionData.teams
    for (let aTeam of allTeams) {
      the2018Competition.addTeam(aTeam.rank, aTeam.name, aTeam.venue, aTeam.city)
    }

    let allGames = competitionData.games
    for (let aGame of allGames) {
      the2018Competition.addGame(aGame.week, aGame.homeTeamRank, aGame.awayTeamRank, aGame.dateTime)
    }
    return the2018Competition
  }

  static addResults(the2018Competition){
    let resultsData = Controller.getResultJSON()
    let allResults = resultsData.results
    for (let aResult of allResults) {
      the2018Competition.setResult(aResult.)
    }
  }
}
