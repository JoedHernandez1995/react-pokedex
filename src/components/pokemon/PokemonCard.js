import React, { Component } from 'react'
import styled from "styled-components";

const Sprite = styled.img`
    width: 5em;
    height: 5em;

`;

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        tooManyRequests: false
    }

    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex = url.split("/")[url.split("/").length - 2];
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        this.setState({name, imageUrl:image, pokemonIndex}); //if the key is the same name as the variable, you can put only the name once
    }   

    render() {
        
        
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        {this.state.pokemonIndex}
                    </div>
                    <Sprite
                        className="card-img-top rounded mx-auto mt-2"
                        onLoad={() => this.setState({imageLoading:false})}
                        onError={() => this.setState({tooManyRequests: true})}
                        src={this.state.imageUrl}
                    />                    
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
