# Sidekick

* Sidekick is an app designed for women looking to find their perfect workout buddy, or, their sidekick.
* Using a shared interest of fitness type or studio, users can find new workout buddies by connecting with other women.


## Technologies
* Rails
* React
* React Router

## Trello Board
[Trello](https://trello.com/b/uaVqcOmJ/sidekick)

## MVP
* Users can search studio class offerings
* Users can read fitness related articles
* Users can comment on articles

## Post- MPV
* Authorization
* Registered users can search for workouts by location (potentially using Google Maps API and/or Mapbox)
* Registered users can invite friends
* Registered users can favorite and bookmarks workouts/ classes
* Registered users can requests to add workouts
* Shop Sidekick merchandise

## Wireframes
![Wireframes for MVP](https://github.com/EJLugo/sidekick/blob/master/README%20Images/Sidekick%20Wireframes.JPG)

## ERD
![ERD for MVP](https://github.com/EJLugo/sidekick/blob/master/README%20Images/Sidekick%20ERD.png)

## Project Link
[Sidekick](https://agile-dawn-44590.herokuapp.com/)

## Code Sample
* Below is a sampling of AJAX calls to read, post, update, and delete comments on blog entries.

```async function getBlogs(){
	const resp = await axios('/blogs');
	return resp.data;
}

async function postComment(id, comment){
	const resp = await axios.post(`/blogs/${id}/comments`, comment);
	return resp.data;
}

async function deleteComment(id){
	const resp = await axios.delete(`/blogs/${id}/comments/${id}`);
}

async function updateComment(id, comment){
	const resp = await axios.put(`/blogs/${id}/comments/${id}`, comment);
	return resp.data;
}
```

## Acknowledgments
* Many thanks to Jess at Hey Girl for being there through long nights of issues and for collaboration.
* David Whitlatch for being a coding angel and helping me sort through issues.
