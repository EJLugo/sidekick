import React, { Component } from 'react';

function CommentForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input
				name='name'
				type='text'
				value={props.user_name}
				onChange={props.handleChange}
				placeholder='User Name'
			>
			<input
				name='comment'
				type='text'
				value={props.comment_body}
				onChange={props.handleChange}
				placeholder='Enter Comment'
			>
		</form>
	)
}

export default CommentForm;
