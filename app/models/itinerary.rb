class Itinerary < ApplicationRecord
  belongs_to :user
  has_many :itinerary_rides, dependent: :destroy
  has_many :rides, through: :itinerary_rides

  validates :name, :rides, presence: true
  validates :group_size, numericality: { greater_than_or_equal_to: 1 }
end
