class ThemeParksController < ApplicationController
  def index
    theme_parks = ThemePark.all
    render json: theme_parks
  end
end
