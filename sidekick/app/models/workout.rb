class Workout < ApplicationRecord
	belongs_to :studios, foreign_key: 'studio_id'
end
