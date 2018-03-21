class Api::PostsController < ApplicationController

    def index
        @all_posts = Post.all
        render :index
    end




    def create
      @post = Post.create(post_params)
      if @post.save
        render :show
      else
        render json: @post.errors, status: :unprocessable_entity
      end

    end


    private

    def post_params
      params.require(:post).permit(
        :subject,
        :content,
        :rating,
        :user_id,
        :city_id,
        :category_id,
      )
    end
    

end
