import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Splash.css'
import Pokedex from '../pokemonComponents/pokedex';
import PokeTeam from '../pokemonComponents/pokemons/pokemontable';
import PokeCreate from '../pokemonComponents/pokecreate/pokemoncreate'

const Splash = (props) => {
    return (
            <Container className="splash">
                <Row>
                <Col className='pokedex' md="4">
                <h2>Pokedex</h2>
               <Row className='pokedexrows'> 
               
               
                   <Pokedex token={props.sessionToken} tokenID={props.pokedexID} /> 
               </Row> 

                <Row className='pokedexrows'>
                    <PokeCreate token={props.sessionToken} tokenID={props.pokedexID} />
                </Row>

                </Col>  
                <Col className='poketeam' md="8">
                    <Container>
                        <Row className='pokesheader'>
                        
                        <h3> Pokemons</h3>
                        <hr />
                        </Row>
                        
                        <Row>
                            <Col  md="12">
                            
                            <PokeTeam token={props.sessionToken} tokenID={props.pokedexID} />
                            </Col>
                            
                        </Row>

                        
                    </Container>
                </Col>
                </Row>
            </Container>
        )
    }


export default Splash;