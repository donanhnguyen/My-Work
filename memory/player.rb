class Player

  attr_reader :name
  
  def initialize(name)
    @name = name
  end

  def guess1
    p "Make your first guess."
    gets.chomp.split("").map(&:to_i)
  end
  
  def guess2
    p "Make your second guess."
    gets.chomp.split("").map(&:to_i)
  end
  
end