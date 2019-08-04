import React from 'react';
import CartoDarkMap from '../components/CartoDarkMap';
import { Button } from 'react-bootstrap';

function NewGamePage() {

  return (
    <div>
      <CartoDarkMap />
      <Button type="submit" variant="outline-danger">Create Game</Button>
    </div>
  )
} 

export default NewGamePage;