class BattleshipGame
  attr_accessor :board, :player, :hit
  
  def initialize(player = HumanPlayer.new("Don"), board = Board.new)
    @player = player
    @board = board
    @hit = false
  end
  
  def attack(position)
    if board[position] == :s
      @hit = true
      board[position] == :HIT
    else
      @hit = false
      board[position] = :x
    end
  end
  
  def count
    @board.count
  end

  def game_over?
    board.won?
  end
  
  def play_turn
    @player.get_play
    attack(@player.get_play)
  end
end
