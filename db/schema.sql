\c team_db;

DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS attendance;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(255),
    team_name VARCHAR(255)
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    gdate DATE,
    gtime TIME,
    home BOOLEAN,
    team_name VARCHAR(255)
);

CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    games_id INT REFERENCES games(id),
    player_id INT REFERENCES players(id),
    player_name VARCHAR(255),
    playing BOOLEAN
);