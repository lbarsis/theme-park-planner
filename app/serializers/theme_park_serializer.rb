class ThemeParkSerializer < ActiveModel::Serializer
  has_many :rides, Serializer: RideSerializer
  has_many :users, through: :rides
  attributes :id, :name, :city, :state, :description
end
