
DELETE FROM players;
DELETE FROM games;
DELETE FROM attendance;

INSERT INTO players (firstname, team) VALUES
(
    'John',
    'Sliders'
),
(
    'Tim',
    'Sliders'
),
(
    'Dave',
    'Sliders'
),
(
    'Greg',
    'Sliders'
),
(
    'Drew',
    'Sliders'
),
(
    'Luke',
    'Sliders'
),
(
    'Sarah',
    'Sliders'
),
(
    'Megan',
    'Sliders'
),
(
    'Travis',
    'Sliders'
),
(
    'Harry',
    'Sliders'
),
(
    'Barbara',
    'Sliders'
);

INSERT INTO games (gdate, gtime, home, team) VALUES
(
    '08/01/18',
    '8:00 PM',
    'false',
    'Beavers'
),
(
    '08/08/18',
    '7:00 PM',
    'false',
    'Hogs'
),
(
    '09/18/18',
    '7:00 PM',
    'false',
    'Monsters'
),
(
    '09/12/18',
    '7:00 PM',
    'false',
    'Yetis'
),
(
    '09/03/18',
    '9:00 PM',
    'true',
    'Wombats'
),
(
    '09/28/18',
    '7:00 PM',
    'true',
    'Bears'
),
(
    '10/08/18',
    '7:00 PM',
    'false',
    'Bobcats'
),
(
    '08/15/18',
    '8:00 PM',
    'false',
    'Jackalopes'
);

INSERT INTO attendance (game_id, player_id) VALUES
(
    '1',
    '1'
),
(
    '1',
    '2'
),
(
    '1',
    '3'
);