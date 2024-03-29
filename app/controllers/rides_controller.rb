class RidesController < ApplicationController
  skip_before_action :authorize, only: :show
  before_action :require_admin, only: :create

  def index
    rides = Ride.all
    render json: rides, status: :ok
  end
  
  def show
    ride = Ride.find(params[:id])
    render json: ride, status: :ok
  end

  def create
    ride = Ride.create!(ride_params)
    render json: ride, status: :created
  end

  def top_three
    rides = Ride.all.sort { |k, v| k.ride_users.count <=> v.ride_users.count }
    render json: rides[0..2]
  end
  
  private

  def ride_params
    params.permit(:name, :thrill_level, :duration, :capacity, :description, :theme_park_id)
  end

end
