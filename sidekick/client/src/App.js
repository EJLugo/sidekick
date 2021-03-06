import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Studios from './components/Studios';
import Workouts from './components/Workouts';
import Blogs from './components/Blogs';

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
						<Route path='/workouts' component={Workouts} />
						<Route path='/blogs' component={Blogs} />
	      </div>
			</Router>
    );
  }
}

export default App;
