class Board
  
  attr_accessor :grid, :board
  
#this is what your board looks like :

#0 [x, o, x]
#1 [o, x, x]
#2 [o, x, x]

  def initialize(grid = Array.new(3) {Array.new(3)})
    @grid = grid
  end
  
  def place_mark(position, mark)
    if mark == :X
      grid[position[0]][position[1]] = :X
    elsif mark == :O
      grid[position[0]][position[1]] = :O
    end
  end
  
  def empty?(position)
    grid[position[0]][position[1]].nil?
  end
  
  def winner
    grid.each do |row|
      if row.all? {|square| square == :X}
        puts "winner is X"
        return :X
      end
    end
      if (grid[0][0] == :X  && grid[1][1] == :X && grid[2][2] == :X) || (grid[0][2] == :X  && grid[1][1] == :X && grid[2][0] == :X)
        puts "winner is X"
        return :X
      end
      if (grid[0][0] == :O && grid[1][0] == :O && grid[2][0] == :O) || (grid[0][1] == :O && grid[1][1] == :O && grid[2][1] == :O) ||
      (grid[0][2] == :O && grid[1][2] == :O && grid[2][2] == :O)
        puts "winner is O"
        return :O
      end
  end
  
  def over?
    if winner == :X || winner == :O
      return true
    end
    grid.each do |row|
      if row.any? {|square| square == nil}
        return false
      end
    end
      if winner != :X && winner != :O
        return true
      end
  end

  
  
end
