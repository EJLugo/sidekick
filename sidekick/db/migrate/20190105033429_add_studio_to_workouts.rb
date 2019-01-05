class AddStudioToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_reference :workouts, :studio, foreign_key: true
  end
end
