class CreateThemeParks < ActiveRecord::Migration[7.0]
  def change
    create_table :theme_parks do |t|
      t.string :name
      t.string :city
      t.string :state
      t.text :description

      t.timestamps
    end
  end
end
