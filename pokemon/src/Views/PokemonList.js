import React from 'react'
import {Link} from 'react-router-dom'
import {
    MDBView
  } from "mdbreact";

class PokemonInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <tr>
                <td><p>{this.props.info.number}</p></td>
                <MDBView waves><td><img src={this.props.info.image}/></td></MDBView>
                <td><Link to={`detail/${this.props.info.id}`}>{this.props.info.name}</Link></td>  
                <td>{this.props.info.types.join(", ")}</td>
                <td>{this.props.info.maxHP}</td>
                <td>{this.props.info.maxCP}</td>
                <td>{this.props.info.resistant.join(", ")}</td>
            </tr>
    
        )
    }
}
export default PokemonInfo;