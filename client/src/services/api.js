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

export function updatePlayer(player) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(player),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/players/${player.id}`, opts)
    .then(resp => resp.json());
}

export function deletePlayer(id) {
    const opts ={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/players/${id}`, opts)
    .then(resp => "deleted")
    .catch(err => {
        throw Error(err);
    })
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

export function updateGame(game) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(game),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/games/${game.id}`, opts)
    .then(resp => resp.json());
};

export function deleteGame(id) {
    const opts ={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${BASE_URL}/games/${id}`, opts)
    .then(resp => "deleted")
    .catch(err => {
        throw Error(err);
    })
};
