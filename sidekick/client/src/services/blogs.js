import axios from 'axios';

async function getBlogs(){
	const resp = await axios('/blogs');
	return resp.data;
}

async function postComment(id, comment){
	const resp = await axios.post(`/blogs/${id}/comments`, comment);
	return resp.data;
}

async function deleteComment(id){
	const resp = await axios.delete(`/blogs/${id}/comments/${id}`);
}

async function updateComment(id, comment){
	const resp = await axios.put(`/blogs/${id}/comments/${id}`, comment);
	return resp.data;
}

export { getBlogs, postComment, deleteComment, updateComment }
