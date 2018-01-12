class PostsController < ApplicationController

    def index
        @all_posts = Post.all
    end

    def new
        @new_post = Post.new

    end


    def show
        @select_post = Post.find_by(id: params[:id])

        if @select_post
            render :show
        else
            render json: "Post doesn't exist."
            
        end
    end

    def create
        @new_post = Post.new(post_params)
        if @new_post.save
            redirect_to post_url(@new_post)
        else
            redirect_to new_post_url
        end
    end


    def edit
        @select_post = Post.find_by(id: params[:id])
    end

    def update
        @select_post = Post.find_by(id: params[:id])
        if @select_post.update_attributes(post_params)
            redirect_to post_url(@select_post)
        else
            render :edit
        end
    end

    def destroy
        @select_post = Post.find_by(id: params[:id])
        @select_post.destroy
        redirect_to posts_url
    end
    
    private

    def post_params
        params.require(:post).permit(:subject, :body)
    end


end
