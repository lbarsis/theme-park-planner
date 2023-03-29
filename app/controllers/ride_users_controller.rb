class RideUsersController < ApplicationController
  # skip_before_action :authorize
  
  def index
    reviews = RideUser.all
    render json: reviews, status: :ok
  end

  def create
    review = @current_user.ride_users.create!(ride_user_params)
    render json: review, status: :created
  end

  private

  def ride_user_params
    params.permit(:rating, :review, :ride_id)
  end
end
