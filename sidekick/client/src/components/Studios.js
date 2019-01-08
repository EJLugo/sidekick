import React, { Component } from 'react';
import { getStudios } from '../services/studios';

class Studios extends Component {
	constructor(props) {
		super(props)
		this.state = {
			studios: [],
			currentStudio: {}
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
			<ul>
				<li key={studio.id}>{studio.studio_name}</li>
				<li>{studio.studio_location}</li>
				<li>{studio.studio_contact_info}</li>
			</ul>
				{
					this.state.currentStudio.length
					?
					<div>
					{this.state.currentStudio.workouts.map(workout =>(
						<div key={workout.id}>
							showing workout info



						</div>))}
					</div>
					:
					<button onClick={()=> {
						this.setState = {
							currentStudio: studio
						}
					}}>show workouts</button>
					}
					</div>
				}
			</ul>
		))}
		</div>
	);
	}
};

export default Studios;
