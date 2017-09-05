class Video
  
  attr_reader :name, :length, :views, :age_restriction
  
  def initialize(name:, length:, age_restriction: nil)
    @name = name
    @length = length
    @views = 0
    @age_restriction = age_restriction
  end
  
  def age_restricted?
    !!age_restriction
  end
  
  def add_view
    @views += 1
  end
end
