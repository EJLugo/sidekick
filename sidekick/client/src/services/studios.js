import axios from 'axios';

async function getStudios(){
	console.log('Here are your studio choices');
	const resp = await axios({
		url: '/studios'
	});
}
console.log(resp);
return resp.data;

export { getStudios }
