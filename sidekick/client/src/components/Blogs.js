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
				<ul>
					<li key={blog.id}>{blog.title}</li>
					<li>{blog.blog_body}</li>
				</ul>
			))}
			</div>
		)
	}
}

export default Blogs;
