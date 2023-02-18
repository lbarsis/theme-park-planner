class ThemeParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description
end
