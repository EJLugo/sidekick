import axios from 'axios';

async function getWorkouts() {
	console.log('Here are your workout choices');
	const resp = await axios({
		url: '/workouts'
	});
	console.log(resp)
	return resp.data;
}
export { getWorkouts }
