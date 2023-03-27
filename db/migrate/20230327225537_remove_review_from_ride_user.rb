class RemoveReviewFromRideUser < ActiveRecord::Migration[7.0]
  def change
    change_column :ride_users, :review, :text
    add_column :ride_users, :rating, :integer
  end
end
