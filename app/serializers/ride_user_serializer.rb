class RideUserSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :user_name
  belongs_to :ride
  belongs_to :user

end
