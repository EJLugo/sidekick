import React, { Component } from 'react';


class CommentForm extends Component() {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined
		};

		this.handleAddComment = this.handleAddComment.bind(this);
	}

	handleAddComment(e) {
		e.preventDefault();

		const comment = e.target.elements.comment.value.trim();
		const error = this.props.handleAddComment(comment);

		this.setState({ error })
	}

	if (!error) {
		e.target.elements.comment.value = ''; //clear the field onAddComment
	}

	render() {
		<div>
			{this.state.error && <p>{this.state.error}</p>}
			<form onSubmit={this.handleAddComment}>
				<input type='text' name='comment' />
				<button>Add your voice</button>
			</form>
		</div>
		
	}
}



// try changing this to be a class component? Maybe? (see above)
// function CommentForm(props) {
// 	return (
// 		<form onSubmit={(e) => {
// 			e.preventDefault();
// 			props.handleSubmit(props.blog.id);
// 		}}>
// 			<input
// 				name='username'
// 				type='text'
// 				value={props.username}
// 				onChange={props.handleChange}
// 				placeholder='User Name'
// 			>
// 			</input>
// 			<input
// 				name='comment'
// 				type='text'
// 				value={props.comment}
// 				onChange={props.handleChange}
// 				placeholder='Enter Comment'
// 			>
// 			</input>
// 			<button>Add Your Voice</button>
// 		</form>
// 	)
// }

export default CommentForm;
