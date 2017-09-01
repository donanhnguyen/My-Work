class HumanPlayer
  
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end
  
  def get_play
    puts "Where do you wanna attack?"
    # position = gets.split.map {|x| x.to_i}
    position = gets.chomp.strip.split("")
    position.map {|i| i.to_i}
  end
end
