import axios from 'axios';

async function getWorkouts() {
	const resp = await axios({
		url: '/workouts'
	});
	return resp.data;
}
export { getWorkouts }
