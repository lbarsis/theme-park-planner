class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  wrap_parameters false

  private

  def record_not_found
    render json: {error: 'Record Not Found'}, status: :not_found
  end

end
