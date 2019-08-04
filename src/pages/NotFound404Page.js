import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function NotFound404Page() {
  return (
    <Container>
      <Jumbotron className="Err-Page">
        <h1>{`Oops You got the 404`}</h1>
        <h3>{`Don't worry, our clever AIs have figured out what you were looking for.`}</h3>
        <Container>
          <iframe title="RickRolled" width="560" height="315" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
      </Jumbotron>
    </Container>
  )
}
export default NotFound404Page;