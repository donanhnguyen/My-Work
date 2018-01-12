require_relative "card"
require 'pry'

class Board
  
  attr_accessor :board, :cards
  
  def initialize
    @cards = []
    @board = Array.new(4) {Array.new(5)}
  end

  def create_cards
        (0..9).each do |num|
          2.times { cards << Card.new(face_value: num) }
      end
  end
  
  # def populate
  #     @board.each.with_index do |row, i1|
  #       row.each.with_index do |col, i2|
  #       self[[i1, i2]] = Card.new(face_value: rand(9))
  #       end
  #       end
  #     end
  #       @board
  
  # end
  
   def populate
     create_cards
        avail_spaces = free_spaces
        cards.each do |card|
          random_space = avail_spaces.sample
          self[random_space] = card
          avail_spaces.delete(random_space)
      end
  end
  
  def free_spaces
    free_spaces = []
    @board.each.with_index do |row, i1|
      row.each.with_index do |col, i2|
        free_spaces << [i1, i2]
      end
    end
    free_spaces
  end
  
  def [](pos)
    row, col = pos
    @board[row][col]
  end
  
  def []=(pos, new_position)
    row, col = pos
    @board[row][col] = new_position
  end
  
  def reveal(pos)
      self[pos].reveal
  end
  
  def hide(pos)
      self[pos].hide
  end
  
  
end