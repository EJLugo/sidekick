import axios from 'axios';

async function getStudios(){
	const resp = await axios({
		url: '/studios'
	});
	return resp.data;
}
export { getStudios }
