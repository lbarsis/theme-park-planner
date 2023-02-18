class ItinerarySerializer < ActiveModel::Serializer
  has_many :rides, though: :itinerary_rides
  attributes :id, :name, :group_size, :start_date, :end_date
  has_one :user
end
