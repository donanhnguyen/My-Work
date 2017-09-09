class Player
  attr_reader :name, :losses
  
  def initialize(name:)
    @name = name
    @losses = 0
  end
  
  def add_point
    @losses += 1
  end
  
  def display_letters
    if @losses == 1
    puts "#{name} has \"G\"."
    elsif @losses == 2
    puts "#{name} has \"G H\"."
    elsif @losses == 3
    puts "#{name} has \"G H O\"."
    elsif @losses == 4
    puts "#{name} has \"G H O S\"."
    elsif @losses == 5
    puts "#{name} has \"G H O S T\"."
    end
  end
  
  def guess
    puts "#{@name}, enter your guess:"
    gets.chomp.downcase
  end
  
  def alert_invalid_guess
    puts "Invalid guess"
  end
  
end