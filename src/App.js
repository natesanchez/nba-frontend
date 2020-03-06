import React, { Component } from 'react';
import Home from "./Home";
import { Route, Link, } from "react-router-dom";
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
          <Link className="headerLink" to='/'>
            <h1>NBA Hub</h1>
          </Link>
        </nav>
        <main>
          <Route path='/' exact component={Home} />
        </main>
      </div>
    );
  }
}


export default App;