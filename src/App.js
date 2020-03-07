import React, { Component } from 'react';
import Home from "./Home";
import Team from "./Team";
import Champs from "./Champs";
import Legends from "./Legends";
import NewLegend from "./NewLegend";
import { Route, Link, Switch, } from "react-router-dom";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    console.log("Component did mount")
  }

  render() {
    return (
      <div>
        <nav>
          <Link className="headerLinkChamps" to='/championships'>
            <h3 className="topLinks">Championships</h3>
          </Link>

          <Link className="headerLinkHome" to='/'>
            <h1 className="title">NBA Hub</h1>
          </Link>

          <Link className="headerLinkLegends" to='/legends'>
            <h3 className="topLinks">Legends</h3>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/team/:teamId" render={routerProps => (<Team {...routerProps} {...this.state} />)} />
            <Route path='/championships' component={Champs} />
            <Route path='/legends' component={Legends} />
            <Route path='/create-legend' component={NewLegend} />
          </Switch>
        </main>
      </div>
    );
  }
}


export default App;