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
				<p>Finding your perfect sidekick is easy! You can search by your favorite workout and your level.</p>
				<p>Here are some of the classes and levels that can be found on sidekick:</p>
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
