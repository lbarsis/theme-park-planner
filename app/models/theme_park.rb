class ThemePark < ApplicationRecord
  has_many :rides
  has_many :users, through: :rides

  validates :name, :city, :state, :description, presence: true
end
