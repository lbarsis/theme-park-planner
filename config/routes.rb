Rails.application.routes.draw do
  resources :itineraries
  resources :rides, only: [:index, :show, :create]
  resources :theme_parks, only: [:index, :create, :destroy]
  resources :users, only: [:index, :create, :update]
  resources :ride_users, only: [:index, :create, :update, :destroy]

  # resources :rides do 
  #   resources :ride_users
  # end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  # get '/my-rides', to: 'users#my_rides'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/rides/search/top-three', to: 'rides#top_three'

  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Write a custom GET route
  # That finds the top three rides
  # based on how many reviews they have. 
  
  # You should produce json of the rides in descending order (most reviewed first).
end
