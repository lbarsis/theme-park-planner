class Ride < ApplicationRecord
  belongs_to :theme_park
  has_many :ride_users, dependent: :destroy
  has_many :itinerary_rides, dependent: :destroy
  has_many :users, through: :ride_users

  validates :name, :thrill_level, :duration, :capacity, :description, :theme_park, presence: :true

  def average_rating
    ride_average = self.ride_users.average(:rating).to_f
  end

end
