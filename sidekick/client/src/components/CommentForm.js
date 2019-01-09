import React, { Component } from 'react';

function CommentForm(props) {
	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			props.handleSubmit(props.blog.id);
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
				placeholder='Enter Comment'
			>
			</input>
			<button>Add Your Voice</button>
		</form>
	)
}

export default CommentForm;
