class User < ApplicationRecord
  # Has secure password is a macro from the 'bcrypt' gem to encrypt a users password
  has_secure_password
  has_many :itineraries
  has_many :rides, through: :itineraries
  has_many :ride_users, dependent: :destroy
  has_many :rides, through: :ride_users
  # Validations
  validates :name, presence: true, length: { minimum: 2 }
  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, on: :create

  def my_rides
    self.rides.uniq
  end
end
