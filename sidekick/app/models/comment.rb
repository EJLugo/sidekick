class Comment < ApplicationRecord
	belongs_to :blog, foreign_key: 'blog_id', optional: true
end
