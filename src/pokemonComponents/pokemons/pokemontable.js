import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './pokemontable.css'
import Display from './pokemondisplay'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import APIURL from '../../helpers/environment';


class PokemonTeam extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      poketeam: [{}],
    }
  }


  
  componentWillMount() {
    this.fetchPokemons()
  }

  
  fetchPokemons = () => {
    fetch(`${APIURL}/team`,{
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })

   .then(response =>{  response.json().then(data => {
      const poketeam = data;
      this.setState({poketeam}); console.log(this.state.poketeam); console.log(this.props.pokedexID)
    });
  })
  
  }

  pokemonDelete = (event) => {
    console.log(event.target.id);
    fetch(`${APIURL}/team/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ team: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }

  pokemonUpdate1 = (event) => {
    let buttonid = event.target.id; 
    fetch(`${APIURL}/team/${buttonid}`, {
      method: 'PUT',
      body: JSON.stringify({  
        team: {
          "pokemon1": (this.props.pokedexID),
          "pokemon2": (this.state.poketeam.pokemon2),
          "pokemon3": (this.state.poketeam.pokemon3),
          "pokemon4": (this.state.poketeam.pokemon4),
          "pokemon5": (this.state.poketeam.pokemon5),
          "pokemon6": (this.state.poketeam.pokemon6),
          "owner": "(this.state.poketeam[buttonid].owner)",
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }
  
  pokemonUpdate2 = (event) => {
    let buttonid = event.target.id; 
    fetch(`${APIURL}/team/${buttonid}`, {
      method: 'PUT',
      body: JSON.stringify({  
        team: {
          "pokemon1": (this.state.poketeam.pokemon1),
          "pokemon2": (this.props.pokedexID),
          "pokemon3": (this.state.poketeam.pokemon3),
          "pokemon4": (this.state.poketeam.pokemon4),
          "pokemon5": (this.state.poketeam.pokemon5),
          "pokemon6": (this.state.poketeam.pokemon6),
          "owner": "(this.state.poketeam[buttonid].owner)",
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }

  pokemonUpdate3 = (event) => {
    let buttonid = event.target.id; 
    fetch(`${APIURL}/team/${buttonid}`, {
      method: 'PUT',
      body: JSON.stringify({  
        team: {
          "pokemon1": (this.state.poketeam.pokemon1),
          "pokemon2": (this.state.poketeam.pokemon2),
          "pokemon3": (this.props.pokedexID),
          "pokemon4": (this.state.poketeam.pokemon4),
          "pokemon5": (this.state.poketeam.pokemon5),
          "pokemon6": (this.state.poketeam.pokemon6),
          "owner": "(this.state.poketeam[buttonid].owner)",
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }

  pokemonUpdate4 = (event) => {
    let buttonid = event.target.id; 
    fetch(`${APIURL}/team/${buttonid}`, {
      method: 'PUT',
      body: JSON.stringify({  
        team: {
          "pokemon1": (this.state.poketeam.pokemon1),
          "pokemon2": (this.state.poketeam.pokemon2),
          "pokemon3": (this.state.poketeam.pokemon3),
          "pokemon4": (this.props.pokedexID),
          "pokemon5": (this.state.poketeam.pokemon5),
          "pokemon6": (this.state.poketeam.pokemon6),
          "owner": "(this.state.poketeam[buttonid].owner)",
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }

  pokemonUpdate5 = (event) => {
    let buttonid = event.target.id; 
    fetch(`${APIURL}/team/${buttonid}`, {
      method: 'PUT',
      body: JSON.stringify({  
        team: {
          "pokemon1": (this.state.poketeam.pokemon1),
          "pokemon2": (this.state.poketeam.pokemon2),
          "pokemon3": (this.state.poketeam.pokemon3),
          "pokemon4": (this.state.poketeam.pokemon4),
          "pokemon5": (this.props.pokedexID),
          "pokemon6": (this.state.poketeam.pokemon6),
          "owner": "(this.state.poketeam[buttonid].owner)",
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }

  pokemonUpdate6 = (event) => {
    let buttonid = event.target.id; 
    fetch(`${APIURL}/team/${buttonid}`, {
      method: 'PUT',
      body: JSON.stringify({  
        team: {
          "pokemon1": (this.state.poketeam.pokemon1),
          "pokemon2": (this.state.poketeam.pokemon2),
          "pokemon3": (this.state.poketeam.pokemon3),
          "pokemon4": (this.state.poketeam.pokemon4),
          "pokemon5": (this.state.poketeam.pokemon5),
          "pokemon6": (this.props.pokedexID),
          "owner": "(this.state.poketeam[buttonid].owner)",
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchPokemons())
  }





  render() {
   
    

    return (
       
        <div> 
      <Container >
        
         {this.state.poketeam.length < 1 ? (
          <div />
        ) : (
          <Display pokemonteam={this.state.poketeam} delete={this.pokemonDelete} 
          update1={this.pokemonUpdate1}  update2={this.pokemonUpdate2}  update3={this.pokemonUpdate3}  
          update4={this.pokemonUpdate4}  update5={this.pokemonUpdate5}  update6={this.pokemonUpdate6}  
          />
        )}
      </Container>
      </div>
      
    )
  }
}

export default PokemonTeam