class Workout < ApplicationRecord
	belongs_to :studio, foreign_key: 'studio_id'
end
