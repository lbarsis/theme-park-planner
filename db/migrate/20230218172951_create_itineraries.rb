class CreateItineraries < ActiveRecord::Migration[7.0]
  def change
    create_table :itineraries do |t|
      t.string :name
      t.integer :group_size
      t.date :start_date
      t.date :end_date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
