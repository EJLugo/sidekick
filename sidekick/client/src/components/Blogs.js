import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import { getBlogs, postComment, deleteComment, updateComment } from '../services/blogs';

class Blogs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			blogs: [],
			username: '',
			comment: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	async handleSubmit(id) {
		await postComment(id, { comment: {user_name: this.state.username, comment_body: this.state.comment } });
		const blogs = await getBlogs();
		this.setState({
			blogs
		})
	}

	async handleDelete(id) {
		const noMore = await deleteComment(id);
		const blogs = await getBlogs();
		this.setState({
			blogs
		})
	}

	async handleUpdate(id) {
		await updateComment(id, { comment: {user_name: this.state.username, comment_body: this.state.comment } });
		const blogs = await getBlogs();
		this.setState({
			blogs
		})
	}

	async componentDidMount() {
		const blogs = await getBlogs();
		this.setState({
			blogs
		})
	}



	render() {
		return (
			<div>
			{this.state.blogs.map(blog => (
				<div key={blog.id}>
					<ul>
						<li>{blog.title}</li>
						<li>{blog.blog_body}</li>
					</ul>
					<hr />
					<CommentList
						blogs={blog}
						handleDelete={this.handleDelete}
						handleUpdate={this.handleUpdate}
					/>
					<CommentForm
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						blog={blog}
					/>
				</div>

			))}
			</div>
		)
	}
}

export default Blogs;
