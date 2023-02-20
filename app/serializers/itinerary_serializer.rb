class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :group_size, :start_date, :end_date, :rides
  has_one :user
end
