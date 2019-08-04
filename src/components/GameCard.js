import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import CartDarkMap from './CartoDarkMap';
import { Link } from 'react-router-dom';

function GameCard({ game }) {

  const buildHighScoreObject= (listOfMaps) => {
    const scoreObject = {}
    for (let i = 0; i < listOfMaps.length; i++) {
      scoreObject[listOfMaps[i].player] = listOfMaps[i].score 
    }
    return scoreObject
  }

  const listPlayers= (listOfPlayers, listOfMaps) => {
    const scoreObject = buildHighScoreObject(listOfMaps)
    return listOfPlayers.map((player) => {
      return <ListGroup.Item variant="dark">{`${player.user}...${scoreObject[player.id]}`}</ListGroup.Item>
      })
  }

  return (
    <Card bg="warning" text="yellow" style={{ width: '18rem' }}>
      <Card.Header>
        <Card.Title>
          <Link to={`/game/${game.id}`} >{game.name}</Link>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <CartDarkMap center_lon={game.center_lon} center_lat={game.center_lat} zoom={game.zoom} play={false}/>
        <Card.Title>
          High Scores:
        </Card.Title>
        <ListGroup>
          {listPlayers(game.players, game.run_maps)}
        </ListGroup>
        
      </Card.Body>
    </Card>
  )
}

export default GameCard;