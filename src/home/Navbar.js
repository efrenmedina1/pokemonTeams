import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem

} from 'reactstrap';
import './Navbar.css'

import eevee from '../assets/imgs/eevee.ico'
import escaperope from '../assets/imgs/escapesprite.png'

class SiteBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" className="nav"  light expand="md">
                
                    <img alt="Eevee" className = 'eevee' src={eevee}/>
                    <h1 className="navitem2" href="/">
                        Pokemon Teams
                    </h1>
                   
                
                        <Nav className="ml-auto" navbar>
                            <NavItem className="navitem1">
                                <button className="button" onClick={() => this.props.clickLogout()}> <img alt="escaperope" className = 'escaperope' src={escaperope}/> <b onClick={() => this.props.clickLogout()} >Logout</b></button>
                            </NavItem>
                        </Nav>
                  
                </Navbar>
            </div>
        );
    }
}

export default SiteBar;