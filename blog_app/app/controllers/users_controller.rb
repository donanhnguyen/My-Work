class UsersController < ApplicationController

    def index
        @all_users = User.all 
        render :index
    
    end

    def new
        render :new
    end

    def create
        @user = User.create(user_params)
        if @user.save
            redirect_to user_url(@user)
        else
            redirect_to new_user_url
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end


    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
