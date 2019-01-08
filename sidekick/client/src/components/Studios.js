import React, { Component } from 'react';
import { getStudios } from '../services/studios';

class Studios extends Component {
	constructor(props) {
		super(props)
		this.state = {
			studios: [],
			currentStudio: null
		}
	}


	async componentDidMount() {
		const studios = await getStudios();
		this.setState({
			studios
		})
	}

	render() {
		return (
			<div>
				{this.state.studios.map(studio => (
					<div key={studio.id}>
						<ul>
							<li>{studio.studio_name}</li>
							<li>{studio.studio_location}</li>
							<li>{studio.studio_contact_info}</li>
						</ul>
						{
							this.state.currentStudio && this.state.currentStudio.id === studio.id
								?
								<div>
									{this.state.currentStudio.workouts.map(workout => (
										<div key={workout.id}>
											<ul>
												<li>{workout.workout_type}</li>
												<li>{workout.workout_level}</li>
											</ul>
										</div>
									))}
									<button onClick={() => {
									this.setState({
										currentStudio: null
									})
								}}>hide workouts</button>
								</div>
								:
								<button onClick={() => {
									this.setState({
										currentStudio: studio
									})
								}}>show workouts</button>
						}
					</div>
				))}
			</div>
		);
	}
};

export default Studios;
