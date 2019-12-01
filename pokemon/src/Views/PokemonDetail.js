import React from 'react'
import pokeService from '../Services/pokemon.service'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBView, MDBBtn } from "mdbreact";

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
                <h2>Detail Information</h2>
                {this.state.is_loading && <p>Loading Information...</p>}
                {!this.state.is_loading &&
                    <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol lg="5" xl="4">
                          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                            <img
                              className="img-fluid"
                              src={pokemon.image}
                              alt=""
                            />
              
                          </MDBView>
                        </MDBCol>
                        <MDBCol lg="7" xl="8">
                          <h3 className="font-weight-bold mb-3 p-0">
                            <strong>{pokemon.name}</strong>
                          </h3>
                          <p className="dark-grey-text">Pokemon Id: {pokemon.number}</p>
                          <p className="dark-grey-text">Types: {pokemon.types.join(", ")}</p>
                          <p className="dark-grey-text">Classification: {pokemon.classification}</p>
                          <p className="dark-grey-text">Max CP: {pokemon.maxCP}</p>
                          <p className="dark-grey-text">Max HP: {pokemon.maxHP}</p>
                          <p className="dark-grey-text">Weight: {pokemon.weight.minimum} (min) / {pokemon.weight.maximum} (max)</p>
                          <p className="dark-grey-text">Weaknesses: {pokemon.weaknesses.join(", ")}</p>
                          <p className="dark-grey-text">Resistant: {pokemon.resistant.join(", ")}</p>
                          <MDBBtn onClick={this.handleClick} color="primary" size="md">
                            Back To Pokemon List
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                }
                
            </div>
        )
    }
}

export default PokemonDetail;