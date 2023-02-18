class ThemeParkSerializer < ActiveModel::Serializer
  has_many :rides
  has_many :users, through: :rides
  attributes :id, :name, :city, :state, :description
end
