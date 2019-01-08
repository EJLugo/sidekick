import React, { Component } from 'react';

import { getBlogs } from '../services/blogs';

class Blogs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			blogs: []
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
					{blog.comments.map(comment => (
						<ul>
							<li>{comment.user_name}</li>
							<li>{comment.comment_body}</li>
						</ul>
					))}
					<hr />
				</div>
			))}
			</div>
		)
	}
}

export default Blogs;
