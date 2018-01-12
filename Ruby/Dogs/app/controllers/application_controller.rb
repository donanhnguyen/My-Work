class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :all_dogs
  
  def all_dogs
    @all_dogs = Dog.all
  end
end
