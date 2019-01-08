class Studio < ApplicationRecord
	has_many :workouts, dependent: :destroy
end
