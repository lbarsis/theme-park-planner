class RideUserSerializer < ActiveModel::Serializer
  belongs_to :ride
  belongs_to :user
  attributes :id, :review, :rating, :username, :ride
end
