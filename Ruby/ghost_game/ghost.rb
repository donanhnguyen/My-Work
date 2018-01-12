require_relative "player"

class Ghost
  
  attr_reader :player1, :player2, :dictionary, :fragment, :current_player, :previous_player
  
  def initialize(player1:, player2:, dictionary:)
    @player1 = player1
    @player2 = player2
    @dictionary = dictionary
    @fragment = []
    @current_player = player1
    @previous_player = player2
  end
  
  def play_round
    until over?
    puts "---------------------------------"
    puts @fragment.to_s
    take_turn
    next_player!
    end
    puts "#{@current_player.name} guessed the word \"#{@fragment.join.upcase}\" and gains a letter."
    @current_player.add_point
    
    puts @current_player.display_letters
    puts @previous_player.display_letters
  end
  
  def keep_playing
    until @current_player.losses == 5
      @fragment = []
      play_round
    end
    puts "#{@previous_player.name} is the winner!"
  end
  
  def over?
    @dictionary.any? {|word| word == @fragment.join("")}
  end
  
  def next_player!
    if @current_player == player1
      @current_player = player2
      @previous_player = player1
    else
      @current_player = player1
      @previous_player = player2
    end
  end
  
  def take_turn(player = @current_player)
    took_guess = player.guess
    if valid_play?(took_guess)
      @fragment << took_guess
    end
  end
  
  def valid_play?(string)
    potential = @fragment.join("") + string
    if @dictionary.any? {|word| word.start_with?(potential)}
      return true
    else
      @current_player.alert_invalid_guess
      false
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  jon = Player.new(name: "Jon Snow")
  sansa = Player.new(name: "Sansa")
  new_dictionary = File.readlines("dictionary.txt").map(&:chomp)
  game1 = Ghost.new(player1: jon, player2: sansa, dictionary: new_dictionary)
  game1.keep_playing
end

