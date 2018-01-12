class UsersController < ApplicationController
  
  # before_action :require_current_user!, except: [:create, :new, :index]
  
  
  def create
    @created_user = User.new(user_params)
    
    if @created_user.save
      log_in!(@created_user)
      redirect_to user_url(@created_user)
    else
      redirect_to new_user_url
    end
  end
  
  def show
    render :show
  end
  
  def new
    render :new
  end
  
  def index
    @all_users = User.all
    
      render :index
  end
    
  
  
  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
end
