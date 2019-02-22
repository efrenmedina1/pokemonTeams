import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './pokemondisplay.css'
import deleteSave from '../../assets/imgs/delete.png'
import pokeball from '../../assets/imgs/pokemonspin.gif'



const PokeTable = (props) => {
// console.log(props.pokemonteam[0].id)
    return (
        <div>
          
         
            {props.pokemonteam.map((poketeam, id) => {
         return (
    
      <div key={id}>
        <Container >
        <Row>
          <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon1)}</p>

          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon1}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update1} className='buttonblue' > Capture </button>
            </Col>
            
            <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon2)}</p>
          
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon2}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update2} className='buttonblue' >  Capture </button>
            </Col>


            <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon3)}</p>
          
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon3}.png`}/>
          <button id={props.pokemonteam[id].id} onClick={props.update3} className='buttonblue' >  Capture </button>
          </Col>

        </Row>
        <Row>

        <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon4)}</p>
          
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon4}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update4} className='buttonblue' >  Capture </button>
          </Col>

          <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon5)}</p>
       
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon5}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update5} className='buttonblue' >  Capture </button>
          </Col>

          <Col className = 'pokeslot' md="4">
          <p className = 'text' >No. {(props.pokemonteam[id].pokemon6)}</p>
          
          <img className = 'pokesprite' alt = "Whos that Pokemon?"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonteam[id].pokemon6}.png`}/>
            <button id={props.pokemonteam[id].id} onClick={props.update6} className='buttonblue' >  Capture </button>
          </Col>

        </Row>
        <Row className="black">
        <Col className='deletecenter' md="12">   <img id={props.pokemonteam[id].id} onClick={props.delete} className = 'deleteSave' src={deleteSave}/> </Col>
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