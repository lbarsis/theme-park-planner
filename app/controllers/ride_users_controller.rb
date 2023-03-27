class RideUsersController < ApplicationController
  skip_before_action :authorize
  def index
    reviews = RideUser.all
    render json: reviews, status: :ok
  end
end
