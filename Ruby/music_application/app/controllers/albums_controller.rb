class AlbumsController < ApplicationController
  
  def index
 
    @all_albums = Album.all
    render :index
    
  end
  
  def show
    @selected_album = Album.find_by(id: params[:id])
    render :show
  end
  
  
  
  
  private

  def album_params
    params.require(:album).permit(:band_id, :live, :name, :year)
  end
  
end
