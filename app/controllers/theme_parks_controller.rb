class ThemeParksController < ApplicationController
  before_action :require_admin, only: [:create, :destroy]
  skip_before_action :authorize, only: :index
  
  def index
    theme_parks = ThemePark.all
    render json: theme_parks, status: :ok
  end

  def create
    theme_park = ThemePark.create!(theme_park_params)
    render json: theme_park, status: :created
  end

  def destroy
    # byebug
    theme_park = ThemePark.find(params[:id])
    theme_park.destroy
    render json: {message: "Itinerary Deleted"}, head: :no_content
  end

  private

  def theme_park_params
    params.permit(:name, :city, :state, :description)
  end
end
