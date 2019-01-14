import React, { Component } from 'react';

function EditCommentForm(props) {
	return (
		<form onSubmit={(e) =>
		e.preventDefault();
		props.handleUpdate(props.blog.id);
	}}>
		<input
			name='username'
			type='text'
			value={props.username}
			onChange={props.handleChange}
			placeholder='User Name'
		>
		</input>
		<input
			name='comment'
			type='text'
			value={props.comment}
			onChange={props.handleChange}
			placeholder='Edit Comment'
		>
		</input>
	</form>
	)
}

export default EditCommentForm;
