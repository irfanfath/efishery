import React from 'react'
import pokeService from '../Services/pokemon.service'
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonList from './PokemonList';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class HalamanList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listPokemon: [{
                name: "",
                image: "",
            },
            ],
            is_loading: true,
            page: 1
        }
        const savedState = localStorage.getItem("savedState")
        const detailState = localStorage.getItem("from_detail")
        if (detailState === "true" && savedState != null) {
            this.state = JSON.parse(savedState)
            localStorage.setItem("from_detail", "false")
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
    }

    componentDidMount() {
        if (this.state.listPokemon.length < 10) {

            pokeService.getAll(this.state.page)
                .then((pokeData) => {
                    this.setState((prevState) => {
                        return {
                            listPokemon: pokeData,
                            page: 1,
                            is_loading: false
                        }
                    })
                })
        }

    }
    componentWillUnmount() {
        localStorage.setItem("savedState", JSON.stringify(this.state))
    }
    fetchMoreData() {
        var page = this.state.page + 1
        pokeService.getAll(page)
            .then((pokeData) => {
                this.setState((prevState) => {
                    return {
                        listPokemon: pokeData,
                        page: page,
                        is_loading: false
                    }
                })
            })
    }

    render() {
        return (
            <div>
                {!this.state.is_loading &&
                    <InfiniteScroll
                        dataLength={this.state.listPokemon.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<div className="loader"></div>}
                    >
                        <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                    <th>Number</th>
                                    <th>Images</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Max HP</th>
                                    <th>Max CP</th>
                                    <th>Resistant</th>
                                    <th>Action</th>
                                </tr>               
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.listPokemon.map((data, i) => {
                                        return <PokemonList info={data} key={i} />
                                    })}
                            </MDBTableBody>
                        </MDBTable>
                    </InfiniteScroll>

                }
                {this.state.is_loading && <p>Please Wait...</p>}
            </div>
        )
    }
}
export default HalamanList;