Rails.application.routes.draw do
  devise_for :users
  get 'spots/index'
  get 'spots/show'
  get 'spots/new'
  get 'spots/create'
  get 'spots/edit'
  get 'spots/update'
  get 'spots/destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :spots
  root to: "spots#index"
end
