class RideUserSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :username
  belongs_to :ride
  belongs_to :user

end
