import React, { Component } from 'react';
import './Workouts.css';
import { getWorkouts } from '../services/workouts';

class Workouts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			workouts: []
		}
	}

	async componentDidMount() {
		const workouts  = await getWorkouts();
		this.setState({
			workouts
		})
	}

	render() {
		return (
			<div>
				<div className='workout-header-container'>
				<h3 className='workout-header'>Finding your perfect sidekick is easy!</h3>
				</div>
				<p className='workout-listings'>Here are some of your amazing, ass-kicking options:</p>
				<div>
				{this.state.workouts.map(workout => (
					<ul>
						<li key ={workout.id}>{workout.workout_type}</li>
						<li>{workout.workout_level}</li>
					</ul>
				))}
				</div>
			</div>
		);
	}
}

export default Workouts;
