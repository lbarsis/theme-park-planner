class User < ApplicationRecord
  # Has secure password is a macro from the 'bcrypt' gem to encrypt a users password
  has_secure_password
  has_many :itineraries
  has_many :rides, through: :itineraries
  # Validations
  validates :name, presence: true, length: { minimum: 2 }
  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }, format: { with: /\A[a-zA-Z0-9]+\z/, message: 'only allows letters and numbers' }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email address' }
  validates :password, presence: true, length: { minimum: 8 }, on: :create
end
