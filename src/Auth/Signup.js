import React, { Component } from "react";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import pokeball from '../../../pokemonreact/src/assets/imgs/pokeball.png'
import './Auth.css'

class Signup extends Component {
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
        fetch("http://localhost:3000/account/user", {
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
                <h1>Are you a boy or a girl?</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Name</Label>
                        <Input id="username" type="text" name="username" placeholder="What is your name?" required onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" required onChange={this.handleChange} />
                    </FormGroup>
                    <button type="image" className='button' src='pokeball'> <img alt="Logout" className = 'pokeball'
                    src={pokeball}/> <p><b>Signup  </b></p>      </button> 
                </Form>
            </div>
        )
    }
}

export default Signup;