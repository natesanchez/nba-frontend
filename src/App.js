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
          <Link to='/'>
            <h1>NBA Hub</h1>
          </Link>
        </nav>
        <main>
          <Route path='/' exact component={Home} />
        </main>
        <footer>
          <div>
            <h1>This is the footer</h1>
          </div>
        </footer>
      </div>
    );
  }
}


export default App;