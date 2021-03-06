import React, { Component } from 'react';
import './Studios.css'
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
			<div className='studio-list-container'>
				<div className='studio-listings'>
				{this.state.studios.map(studio => (
					<div key={studio.id} className='studio-list'>
						<h2 className='studio-name'>{studio.studio_name}</h2>
						<ul className='studio-info-list'>
							<li className='studio-location'>{studio.studio_location}</li>
							<li className='studio-contact'>{studio.studio_contact_info}</li>
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
			</div>
		);
	}
};

export default Studios;
