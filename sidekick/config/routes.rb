Rails.application.routes.draw do
  resources :workouts
  resources :comments
  resources :blogs do
  	resources :comments
  end
  resources :studios do
  	resources :workouts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
