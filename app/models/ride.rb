class Ride < ApplicationRecord
  belongs_to :theme_park
  has_many :ride_users, dependent: :destroy
  has_many :itinerary_rides, dependent: :destroy
  has_many :users, through: :ride_users

  validates :name, :thrill_level, :duration, :capacity, :description, :theme_park, presence: :true

end
