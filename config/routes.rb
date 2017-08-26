Rails.application.routes.draw do
  root 'static_page#home'
  get '/home' => 'static_page#home', :as => :home
  get '/about' => 'static_page#about', :as => :about
  get '/portfolio' => 'static_page#portfolio', :as => :portfolio
  get '/contact' => 'static_page#contact', :as => :contact
  resources :contacts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
