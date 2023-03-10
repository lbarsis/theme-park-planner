class ThemeParksController < ApplicationController
  before_action :require_admin, only: :create
  skip_before_action :authorize, only: :index
  
  def index
    theme_parks = ThemePark.all
    render json: theme_parks, status: :ok
  end

  def create
    theme_park = ThemePark.create!(theme_park_params)
    render json: theme_park, status: :created
  end

  private

  def theme_park_params
    params.permit(:name, :city, :state, :description)
  end
end
