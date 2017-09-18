class HumanPlayer
  attr_accessor :name, :mark

  def initialize(name)
    @name = name
  end
  
  def get_move
    puts "Where would you like to mark, bitch?"
    position = gets.split.map {|x| x.to_i}
    return position
  end

  def display(board)
    # row0 = []
    # 0.upto(2) do |column|
    #   row0 << board.grid[0, column]
    #   end
   
    
    # row1 = []
    # 0.upto(2) do |column|
    #   row1 << board.grid[1, column]
    #   end
    
    
    # row2 = []
    # 0.upto(2) do |column|
    #   row1 << board.grid[2, column]
    #   end
  
    puts "    0   1   2  "
    puts "  |-----------|"
    puts board.grid
    # puts "  |-----------|"
    # puts row1
    # puts "  |-----------|"
    # puts row2
    puts "  |-----------|"
  
  end
  
end
