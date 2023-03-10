class UsersController < ApplicationController
  before_action :require_admin, only: [:index, :update]
  skip_before_action :authorize, only: :create

  def index
    users = User.all
    render json: users, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    user = User.find_by_id(params[:id])
    user.update!(user_params)
    render json: user, status: :ok
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit( :id, :name, :username, :email, :password, :admin)
  end
end
