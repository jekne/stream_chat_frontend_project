import { useState, useEffect } from "react";
import {Container} from "react-bootstrap";
import { Form } from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createLogin } from "../store/Login/action";


// require('dotenv').config({path:__dirname+'/.env'})

const API_KEY = "9q8cp29sk4fh";
const PORT = process.env.REACT_APP_PORT;


export default function Login (){
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch()

    
    // console.log("this is my app key",API_KEY)
    
    const submitForm = (event) => {
      event.preventDefault();
      dispatch(createLogin(userId));
      console.log(" userId",userId)
    
        
      };

    return (
    <div>
        <h1>Welcome to the STREAM chat</h1>
        <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className='mt-5'>
        <h1 className='mt-5 mb-5'>Login</h1>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Name </Form.Label>
          <Form.Control
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            type='email'
            placeholder='Enter user name'
            required
          />
        </Form.Group> 
        <Form.Group className='mt-5'>
          <Button variant='primary' type='submit' onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        <Link to='/signup' style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
        </Form>
        </Container>
    </div>
    )
}