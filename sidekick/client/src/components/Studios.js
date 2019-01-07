import React, { Component } from 'react';
import { getStudios } from '../services/studios';

class Studios extends Component {
	constructor(props) {
		super(props)
		this.state = {
			studios: []
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
		))}
		</div>
	);
	}
};

export default Studios;
