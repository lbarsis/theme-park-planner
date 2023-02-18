class ItineraryRideSerializer < ActiveModel::Serializer
  attributes :id
  has_one :itinerary
  has_one :ride

  
end
