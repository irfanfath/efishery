import React from 'react'
import {Link} from 'react-router-dom'
import {MDBView, MDBBtn } from "mdbreact";

class PokemonList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <tr>
                <td><p>{this.props.info.number}</p></td>
                <MDBView waves><td><Link to={`detail/${this.props.info.id}`}><img src={this.props.info.image}/></Link></td></MDBView>
                <td><Link to={`detail/${this.props.info.id}`}>{this.props.info.name}</Link></td>  
                <td>{this.props.info.types.join(", ")}</td>
                <td>{this.props.info.maxHP}</td>
                <td>{this.props.info.maxCP}</td>
                <td>{this.props.info.resistant.join(", ")}</td>
                <td><Link to={`detail/${this.props.info.id}`}>
                        <MDBBtn color="primary" size="md">
                            See Detail
                        </MDBBtn>
                    </Link>
                </td>  
            </tr>
    
        )
    }
}
export default PokemonList;