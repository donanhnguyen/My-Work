class ComputerPlayer
  
  attr_accessor :board, :name, :mark
  
  #this is what your board looks like :

#0 [o, nil, nil]
#1 [o, nil, nil]
#2 [nil, nil, nil]

  def initialize(name)
    @name = name
  end
  
  def display(board)
    @board = board
  end
  
  def get_move
  leftover_moves = []
  0.upto(2) do |row|
    0.upto(2) do |column|
      position = [row, column]
      if board.grid[position[0]][position[1]].nil?
        leftover_moves << position
      end
      end
    end
    leftover_moves.each do |move|
      if winning_move?(move)
        return move
      end
    end
    leftover_moves.sample
  end
  
  def winning_move?(move)
    board.place_mark(move, @mark)
    if board.winner == @mark
      return true
    else
      return false
    end
  end

end
