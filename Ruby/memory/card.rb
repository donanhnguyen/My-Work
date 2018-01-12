class Card
  
  attr_accessor :face_value, :side
  
  def initialize(face_value: nil, side: "down")
    @face_value = face_value
    @side = side
  end
  
  def reveal
    @side = "up"
  end
  
  def hide
    @side = "down"
  end
  
end