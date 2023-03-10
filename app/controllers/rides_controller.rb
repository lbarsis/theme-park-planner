class RidesController < ApplicationController
  before_action :require_admin, only: :create

  def index
    rides = Ride.all
    render json: rides, status: :ok
  end

  def create
    ride = Ride.create!(ride_params)
    render json: ride, status: :created
  end
  
  private

  def ride_params
    params.permit(:name, :thrill_level, :duration, :capacity, :description, :theme_park_id)
  end

end
