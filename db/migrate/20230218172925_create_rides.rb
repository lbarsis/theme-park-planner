class CreateRides < ActiveRecord::Migration[7.0]
  def change
    create_table :rides do |t|
      t.string :name
      t.integer :thrill_level
      t.integer :duration
      t.integer :capacity
      t.text :description
      t.belongs_to :theme_park, null: false, foreign_key: true

      t.timestamps
    end
  end
end
