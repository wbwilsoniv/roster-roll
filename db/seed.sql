\c team_db;

DELETE FROM players;
DELETE FROM games;
DELETE FROM attendance;

INSERT INTO players (player_name, team_name) VALUES
(
    'John',
    'Sliders'
),
(
    'Tim',
    'Sliders'
),
(
    'Bob',
    'Sliders'
);

INSERT INTO games (gdate, gtime, home, team_name) VALUES
(
    '8/1/18',
    '8:00 PM',
    'false',
    'Sliders'
),
(
    '8/8/18',
    '7:00 PM',
    'false',
    'Sliders'
),
(
    '8/15/18',
    '8:00 PM',
    'false',
    'Sliders'
);

INSERT INTO attendance (player_name, playing) VALUES
(
    'John',
    'true'
),
(
    'Tim',
    'false'
),
(
    'Bob',
    'true'
);