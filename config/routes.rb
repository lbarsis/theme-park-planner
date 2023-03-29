Rails.application.routes.draw do
  resources :itineraries, only: [:index, :create, :update, :show, :destroy]
  resources :rides, only: [:index, :show, :create]
  resources :theme_parks, only: [:index, :create, :destroy]
  resources :users, only: [:index, :create, :update]
  resources :ride_users, only: [:index, :create]

  # resources :rides do 
  #   resources :ride_users
  # end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
