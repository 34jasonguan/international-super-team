Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Routes to get user info
  resources :users
  get '/users/:id/getName', to: 'users#getName'
  get '/users/:id/getPoints', to: 'users#getPoints' 
  put '/users/:id/updatePoints', to: 'users#updatePoints'
  get '/users/:id/getAll_People_byDorm', to: 'users#getAll_People_byDorm'
  get '/users/:id/getTop_All', to: 'users#getTop_All'

end
