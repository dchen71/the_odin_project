Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
  resources :tags


  get 'index' => 'articles#index'
  get 'show/:id' => 'articles#show'
  get 'tags' => 'tags#index'
  get 'tags/:id' => 'tags#show'

  root 'articles#index'
end
