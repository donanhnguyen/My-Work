
class Channel
  attr_reader :subscribers, :uploads, :name

  def initialize(name:)
    @name = name
    @subscribers = []
    @uploads = []
  end

  def add_subscriber(name)
    @subscribers << name
  end
  
  def upload(video)
    @uploads << video
  end
  
  def views
    watches = 0
    @uploads.each do |upload|
      watches += upload.views
    end
    watches
  end
end

