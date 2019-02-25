import React, { Component } from 'react';
import APIURL from '../../helpers/environment';
import './pokemoncreate.css'
import redTeam from '../../assets/imgs/redteam.gif'

class PokemonCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
           Create:{
            id:'',
            pokemon1: '0',
            pokemon2: '0',
            pokemon3: '0',
            pokemon4: '0',
            pokemon5: '0',
            pokemon6: '0'
           },
           poketeam: [{}],
        };
    }

    componentWillMount() {
        this.fetchPokemons()
      }
    
      
      fetchPokemons = () => {
        fetch(`${APIURL}/team2`,{
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        })
    
       .then(response =>{  response.json().then(data => {
          const poketeam = data;
          this.setState({poketeam}); console.log(this.state.poketeam); 
        });
      })
      
      }

    //remove comments to return input fields 

    handleChange = (event) => {
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    handleSubmit = (event) => {
        event.preventDefault();


        fetch(`${APIURL}/team2/create/`, {
            method: 'POST',
            body: JSON.stringify({ team2: this.state.Create }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((res) => {
            this.setState({
               create:{ id: '0',
                pokemon1: '0',
                pokemon2: '0',
                pokemon3: '0',
                pokemon4: '0',
                pokemon5: '0',
                pokemon6: '0'
            },
            })
        })
       
        .then((res) => this.props.fetchPokemons())
        console.log(this.props)
    }

    render() {
        return ( 
            <div className="divteam" >
            <br></br>
                <h2 className="createtitle" >Create new team</h2>
                <form onSubmit={this.handleSubmit} >  
                    <button className='buttoncreate' type="submit" color="primary"> 
                    <img alt="Blue was here Red Smells" className = 'redTeam' src={redTeam}/> 
                    </button> 
                </form>
            </div>
        )
    }
}

export default PokemonCreate;