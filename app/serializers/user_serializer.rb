class UserSerializer < ActiveModel::Serializer
  has_many :itineraries
  attributes :name, :username, :admin, :ride_users, :my_rides
end
