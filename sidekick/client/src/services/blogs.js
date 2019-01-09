import axios from 'axios';

async function getBlogs(){
	console.log('Here! Fun stuff to read!');
	const resp = await axios('/blogs');
	console.log(resp);
	return resp.data;
}

async function postComment(id, comment){
	console.log('You said something cool!');
	const resp = await axios.post(`/blogs/${id}/comments`, comment);
	console.log(resp);
	return resp.data;
}

async function deleteComment(id){
	console.log('Bye!');
	const resp = await axios.delete(`/blogs/${id}/comments/${id}`);
	console.log(resp);
}

export { getBlogs, postComment, deleteComment }
