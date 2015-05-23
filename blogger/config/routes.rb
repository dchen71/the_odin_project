Rails.application.routes.draw do
  resources :articles do
    resources :comments
  end
  
  get 'index' => 'articles#index'
  get 'show/:id' => 'articles#show'

  root 'articles#index'
end
