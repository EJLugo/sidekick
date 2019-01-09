import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import { getBlogs, postComment } from '../services/blogs';

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
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	async handleSubmit(id) {
		console.log(id)
		try {
			await postComment(id, { comment: {user_name: this.state.username, comment_body: this.state.comment } });
			const blogs = await getBlogs();
			this.setState({
				blogs
			})
		} catch(e) {
			console.log(e);
		}
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
