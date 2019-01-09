import React, { Component } from 'react';

function CommentList(props) {
	return (
	<div>
	{props.blogs.comments.map(comment => (
		<ul key={comment.id}>
			<li>{comment.user_name}</li>
			<li>{comment.comment_body}</li>
			<button onClick={() => props.handleDelete(comment.id)}>Delete</button>
		</ul>

	))}
	<hr />
	</div>
);
}

export default CommentList;
