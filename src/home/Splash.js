import React, { Component } from 'react';
import './Splash.css'
import { Container, Row, Col } from 'reactstrap';
import Pokedex from '../pokemonComponents/pokedex';
import Pokedex2 from '../pokemonComponents2/pokedex';
import Pokedex3 from '../pokemonComponents3/pokedex';

export default class Splash extends Component {
    constructor(props) {
      super(props);
      this.state ={
          pokemonToggle: "1"
      }
    }

    

      pokemonViews = () => {
        if (this.state.pokemonToggle === "1") {
          return (
                    <Pokedex token={this.props.sessionToken} />     
          )
        } else if(this.state.pokemonToggle === "2") {
          return (
                    <Pokedex2 token={this.props.sessionToken} />     
          )
        } else {
            return (
                      <Pokedex3 token={this.props.sessionToken} />     
            )
          }
      }

      pokemonTeamOne = () => {
        this.setState({ 
          pokemonToggle: '1', 
        })
        // .then((res) => this.pokemonViews())
      }

      pokemonTeamTwo = () => {
        this.setState({ 
          pokemonToggle: '2', 
        })
        // .then((res) => this.pokemonViews())
      }

      pokemonTeamThree = () => {
        this.setState({ 
          pokemonToggle: '3', 
        })
        // .then((res) => this.pokemonViews())
      }

    render() {
    
        return (
                <div className="Splash" >
                <Container className="toggleHeader" >
                <Row> 
                <Col md="4" >
                    <button onClick={this.pokemonTeamOne} className='buttonteam' > <b onClick={this.pokemonTeamOne} >  Pokemon Team One </b> </button>
                </Col>
                <Col md="4" >
                    <button onClick={this.pokemonTeamTwo} className='buttonteam' > <b onClick={this.pokemonTeamTwo} > Pokemon Team Two </b> </button>
                </Col>
                <Col md="4" >
                    <button onClick={this.pokemonTeamThree} className='buttonteam' > <b onClick={this.pokemonTeamThree} >  Pokemon Team Three </b> </button>
                </Col>
                </Row>
                </Container>
                
                {this.pokemonViews()}    
                </div>
            );
        }

}


