class RideSerializer < ActiveModel::Serializer
  has_many :users, through: :ride_users
  attributes :id, :name, :thrill_level, :duration, :capacity, :description
  has_one :theme_park
end
