import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import PokeCreate from './pokecreate/pokemoncreate'
import PokeTeam from './pokemons/pokemontable';
import APIURL from '../helpers/environment';
import './pokedex.css'


export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results:{
        id: '0',
        flavor_text_entries: [[1], [2], [3], 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 
          29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, [43], [44], [45], [46], [47], [48], [49], [50], [51], [1], [2], [3]]
      },

      poketeam: [{}],

    };


     
    
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
      this.setState({poketeam}); //console.log(this.state.poketeam); 
    });
  })
  
  }

  

  handleSubmit = e => {
    e.preventDefault();
  };

  handleKeyUp = (e) => {
    // let Skik = e.target.value

    let GLOW = e.target.value
    let Skik = GLOW.toLowerCase();
    

    fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${Skik}`
    )
      .then(response => {
        if (Skik === "" || Skik > 802) {
          console.log("Error: " + response.status);
          return;
        }
          
        response.json().then(data => {
          const results = data;
          this.setState({results}); console.log(this.state.results);
        });
      })

      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  };

  render() {
    
    return (
      <Container> 
        <Row> 

        <Col className='pokedex' md="4">

          <Row>
            <h2>Pokedex</h2>
          </Row>

           

                <Row className='row1'>
                  <Col className="sprite">
                    <img className = 'pokedexsprite' alt = "Whos that Pokemon?"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.results.id}.png`}/>
                  </Col>
                  <Col>
                  <br></br>
                    <p>Name: {(this.state.results.name)}</p>
                    <br></br>
                    <p>No.  {(this.state.results.id)}</p>
                  </Col>
                </Row>

                <Row className='row2'>
                <p>Description: {(this.state.results.flavor_text_entries[1].flavor_text)} </p>
                </Row>

              <Row>
                  <form onSubmit={this.handleSubmit} id="form">
                    <input
                      onKeyUp={this.handleKeyUp}
                      id="searchInput"
                      className="searchBar"
                      type="text"
                      placeholder="Who's that pokemon?"
                      required
                    /> 
                  </form>
                  
                </Row>
                <br></br>
                <Row className='pokedexcreate'>

                
          <h3>Search for pokemon using the Pokedex. Press the capture button to grab the pokemon from Pokedex and add it to your team!</h3>
        
        

                    
                    
                </Row>

        </Col>  

                  <Col className='poketeam' md="8">
                    <Container>
                        <Row className='pokesheader'>
                        
                        <h3> Pokemon Team One</h3>
                        <hr />
                        </Row>
                        
                        <Row>
                            <Col  md="12">
                            
                            <PokeTeam token={this.props.token} pokedexID={this.state.results.id} />
                            
                            </Col>
                            
                        </Row>

                        
                    </Container>
                   </Col>



        </Row>
      </Container>
    );
  }
}