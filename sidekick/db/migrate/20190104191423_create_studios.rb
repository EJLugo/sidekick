class CreateStudios < ActiveRecord::Migration[5.2]
  def change
    create_table :studios do |t|
      t.string :studio_location
      t.string :studio_name
      t.string :studio_contact_info

      t.timestamps
    end
  end
end
