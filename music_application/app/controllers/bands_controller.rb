class BandsController < ApplicationController
  
  def index
    @all_bands = Band.all
    render :index
  end
  
  
  def show
    @selected_band = Band.find_by(id: params[:id])
    render :show
  end
  
  def create
    @new_band = Band.new(band_params)
    
    if @new_band.save
      redirect_to band_url(@new_band)
    else
      render :new
    end
  
  end
  
  def new
    @new_band = Band.new
    render :new

  end

  private
  
  def band_params
    params.require(:band).permit(:name)
  end
  
end
