class CreateRideUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :ride_users do |t|
      t.belongs_to :ride, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
