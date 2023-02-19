Rails.application.routes.draw do
  resources :itineraries
  resources :rides
  resources :theme_parks
  resources :users

  post '/login', to: 'sessions#create'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
