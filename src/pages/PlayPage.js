import React from 'react';
import PlayMap from '../components/PlayMap';
import { Button, ButtonToolbar, Row, Col, Container } from 'react-bootstrap';


function PlayPage() {


  // const [ isGameStarted, setIsGameStarted ] = React.useState(false);


  return (
    <div>
      <PlayMap />
      {/* <ButtonToolbar>
        <Container>
          <Row>
            <Col>
              <Button variant="light" onClick={() => setIsGameStarted(true)} disabled={isGameStarted}>Start</Button>          
            </Col>
            <Col></Col>
            <Col>
              <Button variant="danger" onClick={() => setIsGameStarted(false)} disabled={!isGameStarted}>Quit</Button>
            </Col>
          </Row>
        </Container>
      </ButtonToolbar> */}
    </div>
  )
} 

export default PlayPage;