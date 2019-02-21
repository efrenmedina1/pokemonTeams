import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { Container, Row, Col } from 'reactstrap';
import './Auth.css'
import oak from '../assets/imgs/oak.png'
    
const Auth = (props) => {
    return (
        <Container className="background">
        <Row>
            <Col className="middle" md="12">
            <img alt="Logout" className = 'oak'
                    src={oak}/>
            </Col>
        </Row>
            <Row>
                <Col md="6">
                <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6">
                <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;