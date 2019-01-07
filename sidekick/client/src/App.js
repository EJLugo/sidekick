import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import Home from './components/Home';
import Studios from './components/Studios';

class App extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
  render() {
    return (
			<Router>
	      <div className="App">
	        <NavBar />
						<Route exact path='/' component={Home} />
						<Route path='/studios' component={Studios} />
	      </div>
			</Router>
    );
  }
}

export default App;
