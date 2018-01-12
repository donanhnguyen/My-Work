class CommentsController < ApplicationController

    def index
        @all_comments = Comment.all
    end

    def new
        @comment = Comment.new
    end
   
    def create
      @select_post = Post.find_by(id: params[:post_id])
      @comment = @select_post.comments.create(comment_params)
      redirect_to post_url(@select_post)
      
    end

    def destroy
        @select_post = Post.find_by(id: params[:post_id])
        @comment = @select_post.comments.find_by(id: params[:id])
        @comment.destroy
        redirect_to post_url(@select_post)
    end


    def edit
        @select_post = Post.find_by(id: params[:post_id])
        @comment = @select_post.comments.find_by(id: params[:id])
    end

    def update
        @select_post = Post.find_by(id: params[:post_id])
        @comment = @select_post.comments.find_by(id: params[:id])
        if @comment.update_attributes(comment_params)
            redirect_to post_comments_url(@select_post)
        else
            render :edit
        end

    end


    private


    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end


end
