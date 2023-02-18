class CreateItineraryRides < ActiveRecord::Migration[7.0]
  def change
    create_table :itinerary_rides do |t|
      t.belongs_to :itinerary, null: false, foreign_key: true
      t.belongs_to :ride, null: false, foreign_key: true

      t.timestamps
    end
  end
end
