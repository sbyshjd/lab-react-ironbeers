import React, { Component } from 'react';
import Axios from 'axios';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state={
            beer:{},
            isLoaded:false
        }
    }

    componentDidMount() {
        Axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response=>{
                console.log(response.data);
                this.setState({
                    beer:response.data,
                    isLoaded:true
                })
            })
    }

    render() {

        return !this.state.isLoaded ? (<div>The beer is loading!!!</div>) : 
        (
            <div className='ml-5 mr-5'>
                <div>
                    <img src={this.state.beer.image_url} alt="beer-tag" style={{height:'450px'}}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <h3>{this.state.beer.name}</h3>
                    <h3 className='text-secondary'>{this.state.beer.attenuation_level}</h3>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>{this.state.beer.tagline}</p>
                    <p className='text-secondary'>{this.state.beer.first_brewed}</p>
                </div>
                
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        );
    }
}

export default RandomBeer;