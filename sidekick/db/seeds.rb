# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Blog.destroy_all

blogs = Blog.create([
	{
		title: 'This is an awesome article',
		blog_body: 'Great article. Much wow.'
	},
	{
		title: 'This is another awesome article.',
		blog_body: 'Another great article! Super much wow.'
	}
]);

Workout.destroy_all
Studio.destroy_all

studios = Studio.create([
	{
		studio_name: 'SurfSET New York City',
		studio_location: '64 E 4th St',
		studio_contact_info: '212-555-1234'
	},
	{
		studio_name: 'exhale',
		studio_location: '19 W 21st St',
		studio_contact_info: '212-555-1223'
	},
	{
		studio_name: 'CITYROW',
		studio_location: '80 5th Ave',
		studio_contact_info: '212-555-1212'
	}
]);

workouts = Workout.create([
	{
		workout_type: 'Yoga',
		workout_level: 'Beginner'
	},
	{
		workout_type: 'Row',
		workout_level: 'Beginner'
	}
]);



Comment.create([
	{
		user_name: 'Evelyn',
		comment_body: 'Whyyyyyyy'
	},
	{
		user_name: 'Bob',
		comment_body: 'I have no idea'
	}
])
