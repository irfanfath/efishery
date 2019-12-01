import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory'
import HalamanList from "./Views/HalamanList";
import PokemonDetail from "./Views/PokemonDetail";

class Main extends Component {
  render() {
    return (
      <Router>
          <div className="content">
            <Route exact path="/" component={HalamanList}/>
            <Route exact path="/detail/:id" component={PokemonDetail}/>
            <ScrollMemory/>
          </div>
      </Router>
    );
  }
}
 
export default Main;