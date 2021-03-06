Rails.application.routes.draw do



  root 'pages#index'

  scope '/auth' do
  post '/signin', to: 'user_token#create'
  post '/signup', to: 'users#create'
  end
  post 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'


  resources :users
    get 'register', to: 'pages#index'
    get 'login', to: 'pages#index'
    get 'map', to: 'pages#index'

    resources :conversations
    resources :messages
    resources :requests
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
