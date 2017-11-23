class DogsController < ApplicationController
  
  def index
  
    @all_dogs = Dog.all
    
    render :index
    
  end

  def show
    @dog = Dog.find_by(id: params[:id])
    if @dog
      render :show
    else
      render json: "That dog doesn't exist."
    end
    
  end
  
  def new
    render :new
  end
  
  def create
    @dog = Dog.new(dog_params)
    if @dog.save
      render :show
    else
      render :new
      
    end
    
    
  end
  
  
  private
  
  def dog_params
    
    params.require(:dog).permit(:name, :breed, :color)
  end
  
end
