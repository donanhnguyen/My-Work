require 'pry'
class Hangman
  attr_accessor :guesser, :referee, :board, :secret_word, :secret_word_length
  
  def initialize(players = {})
    @guesser = players[:guesser]
    @referee = players[:referee]
    @board = board
  end
  
  def setup
    puts "Referee, choose a secret word."
    @secret_word_length = @referee.pick_secret_word
    puts "Guesser, the length of the word is #{secret_word_length}."
    @guesser.register_secret_length(secret_word_length)
    @board = Array.new(@secret_word_length, nil) 
  end
  
  def update_board
    @guesser.register_secret_length(secret_word_length)
  end
  
  
  def take_turn
    puts "Guesser, take a guess."
    guess = @guesser.guess(@board)
    indices = @referee.check_guess(@guesser.guess(@board))
    update_board
    @guesser.handle_response(guess, indices)
  end
end

class HumanPlayer
  
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end
  
end






class ComputerPlayer
  
  attr_accessor :dictionary, :secret_word, :candidate_words
  
  def initialize(dictionary)
    @dictionary = dictionary
    @candidate_words = candidate_words
  end
  
  def pick_secret_word
    @secret_word = @dictionary.sample
    @secret_word.length
  end
  
  def check_guess(letter)
    indices = []
    @dictionary.each do |word|
      word.split("").each.with_index do |let, index|
      if letter == let
        indices << index
      end
      end
    end
    indices
  end
  
  def guess(board)
   if board.all? {|n| n.nil?}
     return find_most_common_letter
   end
   
   new_words = []
  @candidate_words.each do |word|
    word.split("").each.with_index do |letter, index|
    if letter != find_most_common_letter
      new_words << letter
      end
     end
    end
    
    hash = Hash.new(0)
    new_words.each do |letter|
      if hash.keys.include? letter
        hash[letter] += 1
      else
        hash[letter] = 1
      end
    end
    
    mclc = 0
    mcl = nil
    hash.each do |letter, count|
      if hash[letter] > mclc
        mclc = hash[letter]
        mcl = letter
      end
    end
    return mcl
  end
  
  def find_most_common_letter
     hash = Hash.new(0)
    @candidate_words.each do |word|
      word.split("").each do |letter|
        if hash.keys.include? letter
          hash[letter] += 1
        else
          hash[letter] = 1
        end
      end
    end
    mclc = 0
    mcl = nil
    hash.each do |letter, count|
      if hash[letter] > mclc
        mclc = hash[letter]
        mcl = letter
      end
    end
    mcl
  end
 
 

  def handle_response(guessed_letter, indices)
    new_words = []
    
    if indices == []
      @candidate_words.each do |word|
        new_words << word unless word.include? guessed_letter
      end
    else
      @candidate_words.each do |word|
        matches = 0
        word.split("").each do |letter|
          matches += 1 if letter == guessed_letter
        end
   
        new_words << word if indices.all? { |idx| word[idx] == guessed_letter && matches == indices.length}
      
      end

    end

    @candidate_words = new_words
  end
  
  
  
  def register_secret_length(length)
    @candidate_words = []
    @dictionary.each do |word|
      @candidate_words << word if word.length == length
    end
    @candidate_words
  end
end


if $PROGRAM_NAME == __FILE__
  player1 = HumanPlayer.new("Don")
  computer1 = ComputerPlayer.new(["leer", "reel", "real", "rear"])
  game1 = Hangman.new(players = {guesser: @guesser, referee: @referee})

end