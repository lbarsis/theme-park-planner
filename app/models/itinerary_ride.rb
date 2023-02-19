class ItineraryRide < ApplicationRecord
  # This table is a join table so users can display multiple rides under itineraries without directly connecting itineraries to rides
  belongs_to :itinerary
  belongs_to :ride
end
