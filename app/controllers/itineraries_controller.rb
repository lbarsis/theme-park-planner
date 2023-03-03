class ItinerariesController < ApplicationController
  def index
    itineraries = @current_user.itineraries
    render json: itineraries
  end

  def create
    itinerary = @current_user.itineraries.create!(itinerary_params)
    render json: itinerary, status: :created
  end

  def destroy
    itinerary = @current_user.itineraries.find(params[:id])
    itinerary.destroy
    render json: {message: "Itinerary Deleted"}, head: :no_content
  end

  private

  def itinerary_params
    params.permit(:id, :name, :group_size, :start_date, :end_date, :user_id, ride_ids: [])
  end
end
