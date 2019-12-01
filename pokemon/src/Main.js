import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory'
import HalamanList from "./Views/HalamanList";
import PokemonDetail from "./Views/PokemonDetail";

class Main extends Component {
  render() {
    return (
      <HashRouter>
          <div className="content">
            <Route exact path="/" component={HalamanList}/>
            <Route exact path="/detail/:id" component={PokemonDetail}/>
            <ScrollMemory/>
          </div>
      </HashRouter>
    );
  }
}
 
export default Main;