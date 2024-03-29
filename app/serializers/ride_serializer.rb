class RideSerializer < ActiveModel::Serializer
  has_many :ride_users, Serializer: RideUserSerializer
  has_many :users, through: :ride_users
  attributes :id, :name, :thrill_level, :duration, :capacity, :description, :average_rating, :ride_users
  has_one :theme_park

end
