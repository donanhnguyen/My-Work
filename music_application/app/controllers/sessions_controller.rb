class SessionsController < ApplicationController
  
  
  
  def create
    @selected_user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @selected_user.nil?
      render json: "Wrong password or email..."
    else
      log_in!(@selected_user)
      redirect_to user_url(@selected_user)
      
    end
  
  end

  def new
    render :new
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
  
end
