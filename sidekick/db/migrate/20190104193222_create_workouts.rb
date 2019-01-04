class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :workout_type
      t.string :workout_level

      t.timestamps
    end
  end
end
