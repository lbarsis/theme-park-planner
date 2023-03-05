class UserSerializer < ActiveModel::Serializer
  has_many :itineraries
  attributes :id, :name, :username
end
