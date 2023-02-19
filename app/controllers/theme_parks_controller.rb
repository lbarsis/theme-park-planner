class ThemeParksController < ApplicationController
  
  skip_before_action :authorize, only: :index
  def index
    theme_parks = ThemePark.all
    render json: theme_parks, status: :ok
  end
end
