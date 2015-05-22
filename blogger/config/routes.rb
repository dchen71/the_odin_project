Rails.application.routes.draw do
  resources :articles
  get 'index' => 'articles#index'
  get 'show/:id' => 'articles#show'

  root 'articles#index'
end
