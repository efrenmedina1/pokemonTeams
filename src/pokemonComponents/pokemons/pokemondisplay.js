import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './pokemondisplay.css'
import pokeball from '../../assets/imgs/pokeball.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const PokeTable = (props) => {
// console.log(props.pokemonteam[0].id)
    return (
        <div>
            
            
            {
                        props.pokemonteam.map((poketeam, id) => {
                            return (
                                
                                    // <p>{props.pokemonteam[id].pokemon1}</p>
    
      <div key={id}>
        <Container >
        <Row>
          <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon1)}</p>
          <br></br>
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon1}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update1} className='buttonblue' >Capture</button>
            </Col>
            
            <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon2)}</p>
          <br></br>
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon2}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update2} className='buttonblue' >Capture</button>
            </Col>


            <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon3)}</p>
          <br></br>
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon3}.png`}/>
          <button id={props.pokemonteam[id].id} onClick={props.update3} className='buttonblue' >Capture</button>
          </Col>

        </Row>
        <Row>

        <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon4)}</p>
          <br></br>
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon4}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update4} className='buttonblue' >Capture</button>
          </Col>

          <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon5)}</p>
          <br></br>
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon5}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update5} className='buttonblue' >Capture</button>
          </Col>

          <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon6)}</p>
          <br></br>
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon6}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update6} className='buttonblue' >Capture</button>
          </Col>

        </Row>
        <Row className="black">
        <Col className='deletecenter' md="12">  <button id={props.pokemonteam[id].id} onClick={props.delete} className='buttonblue' >Delete</button> </Col>
        </Row>
      </Container>
      </div>              
                            )
                        })
                    }
        </div>
    );
}

export default PokeTable;