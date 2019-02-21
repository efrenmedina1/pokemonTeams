import React, { Component } from 'react';

class PokemonCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            pokemon1: '',
            pokemon2: '',
            pokemon3: '',
            pokemon4: '',
            pokemon5: '',
            pokemon6: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        fetch(`http://localhost:3000/team/create/`, {
            method: 'POST',
            body: JSON.stringify({ team: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((pokeData) => {
            this.setState({
                id: '',
                pokemon1: '',
                pokemon2: '',
                pokemon3: '',
                pokemon4: '',
                pokemon5: '',
                pokemon6: ''
                
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Create new team</h2>
                <hr />
                <form onSubmit={this.handleSubmit} >
                    <form>
                        <label for="pokemon1">Pokemon 1 |</label> 
                        <input id="pokemon1" type="text" name="pokemon1" value={this.state.pokemon1} placeholder="enter pokemon id" onChange={this.handleChange} />
                    </form>
                    
                    <form>
                        <label for="pokemon2">Pokemon 2 |</label>
                        <input id="pokemon2" type="text" name="pokemon2" value={this.state.pokemon2} placeholder="enter pokemon id" onChange={this.handleChange} />
                    </form>
                    
                    <form>
                        <label for="pokemon3">Pokemon 3 |</label>
                        <input id="pokemon3" type="text" name="pokemon3" value={this.state.pokemon3} placeholder="enter pokemon id" onChange={this.handleChange} />
                    </form>
                    
                    <form>
                        <label for="pokemon4">Pokemon 4 |</label>
                        <input id="pokemon4" type="text" name="pokemon4" value={this.state.pokemon4} placeholder="enter pokemon id" onChange={this.handleChange} />
                    </form>
                    
                    <form>
                        <label for="pokemon5">Pokemon 5 |</label>
                        <input id="pokemon5" type="text" name="pokemon5" value={this.state.pokemon5} placeholder="enter pokemon id" onChange={this.handleChange} />
                    </form>
                    
                    <form>
                        <label for="pokemon6">Pokemon 6 |</label>
                        <input id="pokemon6" type="text" name="pokemon6" value={this.state.pokemon6} placeholder="enter pokemon id" onChange={this.handleChange} />
                    </form>
                    
                    <button className='button' type="submit" color="primary"> <b>Submit</b> </button>
                </form>
            </div>
        )
    }
}

export default PokemonCreate;