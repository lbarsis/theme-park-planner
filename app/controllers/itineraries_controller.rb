class ItinerariesController < ApplicationController
  def index
    itineraries = @current_user.itineraries
    render json: itineraries
  end

  def create
    itinerary = @current_user.itineraries.create!(itinerary_params)
    render json: itinerary, status: :created
  end

  private

  def itinerary_params
    params.permit(:id, :name, :group_size, :start_date, :end_date, :user_id, ride_ids: [])
  end
end
