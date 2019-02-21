import React, { Component } from 'react';
import './Splash.css'
import { Pokedex } from '../pokemonComponents/pokedex';

const Splash = (props) => {
    return (
            <div className="Splash" >
               
                
                        
                
               
               
                   <Pokedex token={props.sessionToken} /> 
               

                

               
                
                
            </div>
        )
    }


export default Splash;