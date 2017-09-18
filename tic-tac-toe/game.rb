require_relative 'board'
require_relative 'human_player'
require_relative 'computer_player'

class Game
  
  attr_accessor :current_player, :board, :player_one, :player_two, :mark
  
  def initialize(player_one, player_two)
    @player_one = player_one
    @player_two = player_two
    @board = Board.new
    @current_player = player_one
    @player_one.mark = :X
    @player_two.mark = :O
  end
  
  def play_turn
    until board.over?
    @player_one.display(board)
    @player_two.display(board)
    board.place_mark(@current_player.get_move, @current_player.mark)
    switch_players!
    end
    board.winner
  end
  
  def switch_players!
    if @current_player == player_one
      @current_player = player_two
    else
      @current_player = player_one
    end
  end

end  

if $PROGRAM_NAME == __FILE__
  puts "Enter a name for player 1"
  player1_name = gets.chomp
  puts "Enter a name for player 2"
  player2_name = gets.chomp
  player_one = HumanPlayer.new(player1_name)
  player_two = HumanPlayer.new(player2_name)
  game = Game.new(player_one, player_two)
  game.play_turn
end