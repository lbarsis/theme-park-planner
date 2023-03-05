class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :group_size, :start_date, :end_date, :rides, :theme_park
  has_one :user

  def theme_park
    theme_park = ThemePark.find(object.rides.first.theme_park_id)
  end
end
