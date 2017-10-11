class EightQueens
  
    DISPLAY_HASH = {
    nil => " ",
    :Q => "Q",
  }
  
  attr_reader :board, :number_of_queens
  
  #   0|1|2|3|4|5|6|7|
  # 0  | | | | | | | |                 
  # 1  | | | | | | | |                                    
  # 2  | | | | | | | |                                       
  # 3  | | | | | | | |                                 
  # 4  | | | | | | | |                                     
  # 5  | | | | | | | |                                      
  # 6  | | | | | | | |                                  
  # 7  | | | | | | | |                                   

  def display
    header = (0..7).to_a.join("  ")
    p "  #{header}"
    @board.each_with_index { |row, i| display_row(row, i) }
  end

  def display_row(row, i)
    chars = row.map { |el| DISPLAY_HASH[el] }.join("  ")
    p "#{i} #{chars}"
  end
  
  def get_available_spaces(pos)#3,4
    available_spaces = []
    left_diag = pos.inject(:-) #-1
    right_diag = pos.inject(:+)#7
    
    board.each_with_index do |row, idx| #2,3
      row.each_with_index do |col, i|
        if !(idx - i == left_diag) || !(idx - i == right_diag)
          available_spaces << [idx, i]
        end
        if idx != pos[0] || i != pos[1]
          available_spaces << [idx, i]
        end
      end
    end
    available_spaces
  end
    
  
  def initialize
    @board = Array.new(8) {Array.new(8)}
    @number_of_queens = 0
  end
  
  def [](pos)
    row, col = pos
    @board[row][col]
  end
  
  def []=(pos, new_pos)
    row, col = pos
    @board[row][col] = new_pos
  end
  
  def place_queen(pos)
    if valid_move?(pos)
      self[pos] = :Q
      @number_of_queens += 1
    end
  end
  
  def valid_move?(pos)
    available_spaces = get_available_spaces(pos)
    if self[pos] != :Q
      return true
    end
    false
  end
  
  # (x, y)
  # [2, 0]
  # x + y => 2+0 => 2
  # x - y => 2-0 => 2
  
  def play
    random = (0..@board.length - 1).to_a
    until @number_of_queens == 9
      display
      place_queen([random.sample, random.sample])
    end
  end

end

if $PROGRAM_NAME == __FILE__
  EightQueens.new.play
end


