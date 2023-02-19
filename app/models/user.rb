class User < ApplicationRecord
  # Has secure password is a macro from the 'bcrypt' gem to encrypt a users password
  has_secure_password
  has_many :itineraries
  has_many :rides, through: :itineraries
end
