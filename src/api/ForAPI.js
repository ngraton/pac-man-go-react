const ForAPIurl = 'http://localhost:8000/'

const fetchPlayers = async () => {
  const response = await fetch(`${ForAPIurl}api/players/`);
  const data = await response.json();
  return await data;
}

const fetchGameByPlayer = async (userID) => {
  const response = await fetch(`${ForAPIurl}api/players/${userID}/games/`);
  const data = await response.json();
  return await data;
}

const loginAPIcall = async (credentialsObject) => {
  return await fetch(`${ForAPIurl}rest-auth/login/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  })
}

const signUpAPIcall = async (credentialsObject) => {
  return await fetch(`${ForAPIurl}registration/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(credentialsObject)
  })
}

// const makeGame = async  (newGameObject)

export default {
  fetchPlayers: fetchPlayers,
  loginAPIcall: loginAPIcall,
  signUpAPIcall: signUpAPIcall,
  fetchGameByPlayer: fetchGameByPlayer,
}