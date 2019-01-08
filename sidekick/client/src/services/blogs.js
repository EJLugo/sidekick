import axios from 'axios';

async function getBlogs(){
	console.log('Here! Fun stuff to read!');
	const resp = await axios({
		url: '/blogs'
	});
	console.log(resp);
	return resp.data;
}

async function postComment(id){
	console.log('You said something cool!');
	const resp = await axios({
		url: `/blogs/${id}/comments`
	});
	console.log(resp);
	return resp.data;
}

export { getBlogs, postComment }
