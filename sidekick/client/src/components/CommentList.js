import React, { Component } from 'react';

function CommentList(props) {
	return (
	<div>
	{props.blogs.comments.map(comment => (
		<ul>
			<li>{comment.user_name}</li>
			<li>{comment.comment_body}</li>
		</ul>
	))}
	<hr />
	</div>
);
}

export default CommentList;
