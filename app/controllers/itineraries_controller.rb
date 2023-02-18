class ItinerariesController < ApplicationController
  def index
    itineraries = Itinerary.all
    render json: itineraries
  end

  def create
    itinerary = Itinerary.create(itinerary_params)
    render json: itinerary, status: :created
  end

  private

  def itinerary_params
    params.permit(:id, :name, :group_size, :start_date, :end_date, :user_id, ride_ids: [])
  end
end
