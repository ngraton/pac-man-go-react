import React from 'react';
import ForAPI from '../api/ForAPI';
import{ Form, Button } from 'react-bootstrap';
import{ Redirect } from 'react-router-dom';

function LoginPage() {

  const [ signInSuccess , setSignInSuccess ] = React.useState(false)
  const [ signUp, setSignUp ] = React.useState(false)

  const submitCredentials = async (event) => {
    event.preventDefault();
    const submittedUsername = event.target.elements["formBasicUsername"].value;
    const submittedPassword = event.target.elements["formBasicPassword"].value;
    const credentialsObject ={
      username: submittedUsername,
      password: submittedPassword
    };
    const response = await ForAPI.loginAPIcall(credentialsObject);
    const responseJSON = await response.json();
    console.log(responseJSON)
    if(responseJSON.key){
      localStorage.setItem('key', responseJSON.key)
      localStorage.setItem('id', responseJSON.user)
      localStorage.setItem('username', submittedUsername)
      setSignInSuccess(true)
    } else {
      alert("Login Failed.")
    }
  };

  const buildSignUpForm = () => {

  }

  return (
    <div>


      { signInSuccess && <Redirect to="/"/> }

      <Form onSubmit={(e) => submitCredentials(e)}>
          <Form.Group controlId="formBasicUsername">
          <Form.Text className="text-muted">
            Please Sign In:
          </Form.Text>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Your Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Your Secret Password" autoComplete="current-password"/>
        </Form.Group>

        {/* <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Comfirm Password" autoComplete="current-password"/>
        </Form.Group> */}

        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Sign Up" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
} 

export default LoginPage;