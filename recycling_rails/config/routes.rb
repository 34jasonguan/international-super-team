Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Routes to get user info
  resources :users
  get '/users/:id/getName', to: 'users#getName'
  get '/users/:id/getPoints', to: 'users#getPoints' 
  put '/users/:id/updatePoints', to: 'users#updatePoints'
  get '/users/:id/getDorm', to: 'users#getDorm'
  get '/users/:id/getTop_All', to: 'users#getTop_All'
  get '/users/:id/getDormRank', to: 'users#getDormRank'

end
