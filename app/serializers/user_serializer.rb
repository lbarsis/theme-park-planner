class UserSerializer < ActiveModel::Serializer
  has_many :itineraries
  has_many :rides, through: :itineraries
  attributes :id, :name, :username
end
