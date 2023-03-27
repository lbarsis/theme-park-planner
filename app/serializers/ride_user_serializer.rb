class RideUserSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating
  has_one :ride
  has_one :user
end
