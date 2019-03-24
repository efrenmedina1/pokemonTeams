import React, { Component } from "react";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import pokeball from '../assets/imgs/pokeball.png'
import './Auth.css'
import APIURL from '../helpers/environment';

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
        fetch(`${APIURL}/account/user`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
            .catch((err) => console.log(err))
        ).then((data) => {
            if(data = "undefined"){
    window.alert( "User already exist. Please choose another username to signup" );
    console.log(data);
            }else{
            console.log(data);
            this.props.setToken(data.sessionToken)}
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
                        <Input id="su_password" type="password" name="password" placeholder="enter password" minlength="6" required onChange={this.handleChange} />
                    </FormGroup>
                    <button type="image" className='button' src='pokeball'> <img alt="Logout" className = 'pokeball'
                    src={pokeball}/> <p><b>Signup  </b></p>      </button> 
                </Form>
            </div>
        )
    }
}

export default Signup;