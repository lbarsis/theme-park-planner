Rails.application.routes.draw do
  resources :ride_users
  resources :itinerary_rides
  resources :itineraries
  resources :rides
  resources :theme_parks
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
