class RideUsersController < ApplicationController
  skip_before_action :authorize, only: :index
  
  def index
    reviews = RideUser.all
    render json: reviews, status: :ok
  end

  def create
    review = @current_user.ride_users.create!(ride_user_params)
    render json: review, status: :created
  end

  def update
    review = @current_user.ride_users.find(params[:id])
    review.update!(ride_user_params)
    render json: review, status: :ok
  end

  def destroy
    review = @current_user.ride_users.find(params[:id])
    review.destroy
    render json: {message: "Review Deleted"}, head: :no_content
  end

  private

  def ride_user_params
    params.permit(:rating, :review, :ride_id)
  end
end
