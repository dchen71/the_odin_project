Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
  
  resources :tags
  resources :authors

  resources :author_sessions, only: [ :new, :create, :destroy ]
  
  get 'login'  => 'author_sessions#new'
  get 'logout' => 'author_sessions#destroy'

  get 'index' => 'articles#index'
  get 'show/:id' => 'articles#show'
  get 'tags' => 'tags#index'
  get 'tags/:id' => 'tags#show'
  get  '/authors/new' => 'authors#new'

  root 'articles#index'
end
