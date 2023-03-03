class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :itinerary_rides, dependent: :destroy
  has_many :rides, through: :itinerary_rides
end
