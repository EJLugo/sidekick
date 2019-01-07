import axios from 'axios';

async function getBlogs(){
	console.log('Here! Fun stuff to read!');
	const resp = await axios({
		url: '/blogs'
	});
	console.log(resp);
	return resp.data;
}

export { getBlogs }
