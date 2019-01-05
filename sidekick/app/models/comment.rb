class Comment < ApplicationRecord
	belongs_to :blogs, foreign_key: 'blog_id'
end
