Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Routes to get user info
  resources :users
  get '/users/:id/getName', to: 'users#getName'
  get '/users/:id/getPoints', to: 'users#getPoints' 
  put '/users/:id/updatePoints', to: 'users#updatePoints'

  resources :dorms
  get '/dorms/:id/getName', to: 'dorms#getName'


  # Defines the root path route ("/")
  # root "articles#index"
end
