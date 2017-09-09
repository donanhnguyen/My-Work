class Hangman
  attr_accessor :guesser, :referee, :board, :secret_word, :number_of_guesses, :secret_word_length
  
  DISPLAY = {
    nil => " "
  }
  
  def initialize(players = {})
    @guesser = players[:guesser]
    @referee = players[:referee]
    @number_of_guesses = 8
    @board = board
  end
  
  def setup
    @secret_word_length = @referee.pick_secret_word
    puts "Guesser, the length of the word is #{@secret_word_length}."
    @guesser.register_secret_length(@secret_word_length)
    @board = Array.new(@secret_word_length, nil)
  end
  
  def update_board(guess, indices)
    indices.each do |index| 
      @board[index] = guess
    end
  end
  
  def display
    @board.each do |letter|
      if letter == nil
        puts "#{DISPLAY[letter]}"
      else
        puts "#{letter}"
      end
    end
  end
  
  def play
    setup
    until @number_of_guesses == 0
      display
      take_turn
    end
    puts "Secret word was \"#{@referee.secret_word}\"."
  end
  
  def take_turn
    guess = @guesser.guess(@board)
    indices = @referee.check_guess(guess)
    update_board(guess, indices)
    @number_of_guesses -= 1 if indices.empty?
    @guesser.handle_response(guess, indices)
  end
end

class HumanPlayer
  
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end
  
  def register_secret_length(length)
    puts "Secret word is #{length} letters long"
  end
  
  def handle_response(guess, indices)
    puts "Found \"#{guess}\" at positions #{indices}"
  end
  
  def guess(board)
    puts "Take a guess:"
    guess = gets.chomp!
  end
  
end

class ComputerPlayer
  
  def self.player_with_dict_file(dict_file_name)
    ComputerPlayer.new(File.readlines(dict_file_name).map(&:chomp))
  end
  
  attr_accessor :candidate_words, :secret_word
  
  def initialize(dictionary)
    @dictionary = dictionary
  end
  
  def pick_secret_word
    @secret_word = @dictionary.sample
    @secret_word.length
  end
  
  def check_guess(letter)
    indices = []
    @secret_word.split("").each.with_index do |let, index|
      if letter == let
        indices << index
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
    @candidate_words = @dictionary.select {|word| word.length == length}
  end
end


if $PROGRAM_NAME == __FILE__
  guesser = HumanPlayer.new("Don")
  referee = ComputerPlayer.player_with_dict_file("dictionary.txt")
  game1 = Hangman.new(players = {guesser: guesser, referee: referee})
  game1.play
end