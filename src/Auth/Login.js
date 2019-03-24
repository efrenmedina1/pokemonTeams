import React, { Component} from "react";
import {Form, FormGroup, Label, Input, } from "reactstrap";
import pokeball from '../assets/imgs/pokeball.png'
import './Auth.css'
import APIURL from '../helpers/environment';

class Login extends Component {
    constructor(props) {
        super(props)
            this.state = {
                username: '',
                password: ''
            };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/account/login`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        }).then(
            (response) => response.json()
        )
        .then(json =>  { 
            if(json.error == "failed to authenticate") {
            window.alert( "User does not exisit. Please sign up" );
            console.log(json);
          } else if(json.error == "you failed a") {
            window.alert( "Incorrect Password. Contact admin to reset password" );
            console.log(json)
          } else {
            console.log(json)
            this.props.setToken(json.sessionToken)
            window.alert("Logged in");
          }
          } )
        event.preventDefault()
    }

render() {
    return (
        <div>
            <h1>Whats my grandson's name?</h1>
            <Form onSubmit={this.handleSubmit}>
                    <FormGroup onSubmit={this.handleSubmit} >
                        <Label for="username">Name</Label>
                        <Input id="li_username" type="text" name="username" placeholder="What was your name again?" onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required />
                    </FormGroup>
                    <button type="image" className='button' src='pokeball'> <img alt="login" className = 'pokeball'
                    src={pokeball}/> <p><b>Login  </b></p>      </button> 
                </Form>
            </div>
    )
    }
}
export default Login;