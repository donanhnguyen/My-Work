require_relative "board"
require_relative "player"
require_relative "card"
require "pry"

class Game
  attr_accessor :grid, :player
  
  
  DISPLAY_HASH = {
    nil => ["_", "_"],
    0 => ["0", "_"],
    1 => ["1", "_"],
    2 => ["2", "_"],
    3 => ["3", "_"],
    4 => ["4", "_"],
    5 => ["5", "_"],
    6 => ["6", "_"],
    7 => ["7", "_"],
    8 => ["8", "_"],
    9 => ["9", "_"],
  }
  
  def initialize
    @grid = Board.new
    @player = Player.new("Don")
  end
  
  def play
    tries = 0
    @grid.populate
    until won?
    p "There are #{how_many_cards} cards left on the board."
    display
    take_turn
      tries += 1
      p "You tried #{tries} times so far."
    end
    p "YEAH!"
    p "It took #{tries} tries to finish."
    display
  end
  
  def computer_play
    tries = 0
    @grid.populate
    until won?
    p "There are #{how_many_cards} cards left on the board."
    display
    computer_take_turn
      tries += 1
    end
    p "YEAH!"
    p "It took #{tries} tries to finish."
    display
  end

  def won?
    @grid.board.flatten.all? {|card| card.side == "up"}
  end

  def how_many_cards
    count = 0
    @grid.board.flatten.each do |card|
      if card.side == "down"
        count += 1
      end
    end
    count
  end

 def display
    header = (0..4).to_a.join("  ")
    p "  #{header}"
    @grid.board.each_with_index { |row, i| display_row(row, i) }
  end

  def display_row(row, i)
    chars = row.map do |card|
      if card.side == "down"
        DISPLAY_HASH[card.face_value][1]
      elsif card.side == "up"
        DISPLAY_HASH[card.face_value][0]
      end
    end.join("  ")
    p "#{i} #{chars}"
  end

 def display2
    header = (0..4).to_a.join("  ")
    p "  #{header}"
    @grid.board.each_with_index { |row, i| display_row2(row, i) }
  end

  def display_row2(row, i)
    chars = row.map do |card|
      if card.side == "down"
        DISPLAY_HASH[card.face_value][0]
      elsif card.side == "up"
        DISPLAY_HASH[card.face_value][0]
      end
    end.join("  ")
    p "#{i} #{chars}"
  end

  def take_turn
    first_guess = @player.guess1
    @grid.reveal(first_guess)
      display
    second_guess = @player.guess2
    # @grid.reveal(second_guess)
    #   display
    if @grid[first_guess].face_value == @grid[second_guess].face_value
      @grid.reveal(first_guess)
      @grid.reveal(second_guess)
    else
      @grid.hide(first_guess)
      @grid.hide(second_guess)
    end
  end
  
   def computer_take_turn
    first_guess = [rand(4), rand(5)]
    second_guess = [rand(4), rand(5)]
    if @grid[first_guess].face_value == @grid[second_guess].face_value
      @grid.reveal(first_guess)
      @grid.reveal(second_guess)
    end
    end
    
end

if $PROGRAM_NAME == __FILE__
  game1 = Game.new
  p "Do you want computer player? 'y' or 'n'."
  answer = gets.chomp
  if answer == "y"
    game1.computer_play
  elsif answer != "y"
    game1.play
  end
end