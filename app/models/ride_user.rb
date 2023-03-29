class RideUser < ApplicationRecord
  # This is a join table to see how many users are assigned under a ride
  belongs_to :ride
  belongs_to :user

  def user_name
    self.user.name
  end

end
