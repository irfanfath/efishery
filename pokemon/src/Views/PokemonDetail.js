import React from 'react'
import pokeService from '../Services/pokemon.service'
import {Button} from 'react-bootstrap'
function Evolution(props){
    return (
        <div style={{margin: "30px"}}>
            <div>
            <img src={props.evolution.image} width="100px" height="auto"/>
            </div>
            <p>{props.evolution.name}</p>
        </div>
    )
}

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                id: "",
                number: "",
                name: "",
                image: "",
                types: "",
                classification: "",
                resistant: "",
                weaknesses: "",
                maxCP: "",
                maxHP: "",
                weight: {
                    minimum: 0,
                    maximum: 0
                  },
                  evolutions: [{
                    name: "",
                    image: "",
                  }],
                  attacks: {
                    fast: [{
                      name: "",
                      type: "",
                      damage: ""
                    }],
                    special: [{
                      name: "",
                      type: "",
                      damage: ""
                    }]
                  }
            },
            is_loading: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        localStorage.setItem("from_detail","true")
        this.props.history.goBack()        
        // this.context.router.history.goBack()
    }
    componentDidMount() {
        const id = this.props.id || this.props.location.pathname.split("/")[2]
        pokeService.getPoke(id).then((data) => {
            this.setState({
                is_loading: false,
                info: data
            })
        })
    }
    render() {
        const pokemon = this.state.info
        return (
            <div>
                <h2>Pokémon Detail Information</h2>
                <Button onClick={this.handleClick}>Back to Main Menu</Button>
                {this.state.is_loading && <p>Loading Information...</p>}
                {!this.state.is_loading &&
                    <div>
                        <img src={pokemon.image} />
                        <h2>{pokemon.name}</h2>
                        <div>
                            <h3>Detailed Information</h3>
                            <p>Pokemon No: {pokemon.number}</p>
                            <p>Types: {pokemon.types.join(", ")}</p>
                            <p>Classification: {pokemon.classification}</p>
                            <p>Max CP: {pokemon.maxCP}</p>
                            <p>Max HP: {pokemon.maxHP}</p>
                            <p>Weight: {pokemon.weight.minimum} (min) / {pokemon.weight.maximum} (max)</p>
                            <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
                            <p>Resistant: {pokemon.resistant.join(", ")}</p>
                            <p>Evolutions</p>
                            <div>
                                {(pokemon.evolutions != null) ? pokemon.evolutions.map(data => {
                                    return <Evolution evolution={data}/>
                                }):  <p>-</p>}
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

export default PokemonDetail;