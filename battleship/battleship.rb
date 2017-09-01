require_relative "board"
require_relative "player"

class BattleshipGame
  
  attr_accessor :player, :board
  
  def initialize(player = HumanPlayer.new("Don"), board = Board.new)
    @player = player
    @board = board
  end
  
  def attack(position)
    if board[position] == :s
      puts " BULLSEYE ! at coordinate #{position}."
      board[position] = :h
    else
      board[position] = :x
    end
  end
  
  def count
    @board.count
  end

  def game_over?
    @board.won?
  end
  
  def play
    15.times {@board.place_random_ship}
    until game_over?
      play_turn
      @board.display
    end
    puts "Game over."
   end
  
  def play_turn
    attack(@player.get_play)
  end
end

if $PROGRAM_NAME == __FILE__
game1 = BattleshipGame.new
game1.play
end
