import React from 'react';
import GameCard from '../components/GameCard';
import ForAPI from '../api/ForAPI';
import { Container } from 'react-bootstrap';

function HomePage() {

  const [ games, setGames ] = React.useState([])

  React.useEffect(() => {
    if(!games[0] && localStorage.getItem('id')){
      loadGames(ForAPI.fetchGameByPlayer, localStorage.getItem('id'))
        .then(response => buildGameCards(response))
          .then(array => setGames(array))
    }
  }, [] )

  const loadGames = async (func, id) => {
    const response = await func(id)
    return await response
  }

  const buildGameCards = async (games) => {
    return await games.map((game, i) => {
      return <GameCard game={game} key={game.id}/>
    })
  }

  return (
    <div>
    <Container>
      { !games[0] && (localStorage.getItem('id') ? <p>No Games, add from the Nav Bar</p> : <p>Login or SignUp</p>)}
      {games}
    </Container>

    </div>
  )
} 

export default HomePage;