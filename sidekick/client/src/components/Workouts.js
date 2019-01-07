import React, { Component } from 'react';
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
			{this.state.workouts.map(workout => (
				<ul>
					<li key ={workout.id}>{workout.workout_type}</li>
					<li>{workout.workout_level}</li>
				</ul>
			))}
			</div>
		);
	}
}

export default Workouts;
