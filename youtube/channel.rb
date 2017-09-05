
class Channel
  
  attr_accessor :subscribers, :uploads, :views, :name
  
  def initialize(channel = {})
    @name = channel[:name]
    @subscribers = []
    @uploads = []
    @views = 0
    
  end
  
  def add_subscriber(name)
    @subscribers << name
  end
  
  
  def upload(video)
    @uploads << video
  end
  
  def views
    @uploads.each do |upload|
      @views += upload.views
    end
    @views
  end
  
  
  
end
