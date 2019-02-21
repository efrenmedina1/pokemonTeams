import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button

} from 'reactstrap';
import './Navbar.css'

import eevee from '../assets/imgs/eevee.ico'

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
                
                    <h1 className="navitem2" href="/">
                    <img alt="Logout" className = 'eevee'
                    src={eevee}/>
                        Pokemon Teams
                    </h1>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="navitem1">
                                <button className="button" onClick={() => this.props.clickLogout()}><b>Logout</b></button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SiteBar;