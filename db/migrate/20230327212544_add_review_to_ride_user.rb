class AddReviewToRideUser < ActiveRecord::Migration[7.0]
  def change
    add_column :ride_users, :review,  :integer
  end
end
