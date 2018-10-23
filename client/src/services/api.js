const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

export function fetchPlayers() {
    return fetch(`${BASE_URL}/players`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
    });
};

export function fetchOnePlayer(id) {
    return fetch(`${BASE_URL}/players/${id}`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
    });
};

export function savePlayer(player) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/players`, opts)
    .then(resp => resp.json());
};

export function fetchGames() {
    return fetch(`${BASE_URL}/games`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
    });
};

export function fetchOneGame(id) {
    return fetch(`${BASE_URL}/games/${id}`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
    });
};

export function saveGame(game) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/games`, opts)
    .then(resp => resp.json());
};