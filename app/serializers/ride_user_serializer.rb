class RideUserSerializer < ActiveModel::Serializer
  attributes :id
  has_one :ride
  has_one :user
end
