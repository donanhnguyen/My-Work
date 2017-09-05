class Video
  
  attr_accessor :name, :length, :views, :age_restriction, :video
  
  def initialize(video = {})
    @video = video
    @name = video[:name]
    @length = video[:length]
    @views = 0
    @age_restriction = video[:age_restriction]
  end
  
  def age_restricted?
    if video[:age_restriction]
      return true
    else
      false
    end
  end
  
  def add_view
    @views += 1
  end
end
