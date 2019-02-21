import React, { Component} from "react";
import {Form, FormGroup, Label, Input, } from "reactstrap";
import pokeball from '../../../pokemonreact/src/assets/imgs/pokeball.png'
import './Auth.css'

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
        fetch("http://localhost:3000/account/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
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
                    <button type="image" className='button' src='pokeball'> <img alt="Logout" className = 'pokeball'
                    src={pokeball}/> <p><b>Login  </b></p>      </button> 
                </Form>
            </div>
    )
    }
}
export default Login;