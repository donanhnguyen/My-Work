require "set"

class WordChainer
  
  attr_accessor :dictionary, :current_words, :current_word, :all_seen_words
  
  def initialize
    @dictionary = File.readlines("dictionary.txt").map(&:chomp).to_set
    @current_words = []
    @current_word = ""
    @all_seen_words = {}
  end
  
  def adjacent_words(word)
    nearby_words = []
    alphabet = ("a".."z").to_a
    word.split("").each.with_index do |letter1, index1|
      alphabet.each.with_index do |letter2, index2|
        if letter1 != letter2
          temp_word = word.dup
          temp_word[index1] = letter2
          nearby_words << temp_word if (@dictionary.include? temp_word)
        end
      end
    end
    nearby_words
  end

  def explore_new_words
    new_current_words = []
      @current_words.each do |word|
        adjacent_words(word).each do |adjacent_word|
          if !@all_seen_words.include?(adjacent_word)
            @all_seen_words[adjacent_word] = word
            new_current_words << adjacent_word
          end
        end
      end 
      new_current_words
  end
  
  def run(source, target)
    @current_words << source
    @current_word = source
    @all_seen_words[source] = nil
    while !@current_words.empty?
      @current_words = explore_new_words
    end
    build_path(source, target)
  end

   def build_path(source, target)
      pathway = []
      current_word = target
      until @all_seen_words[current_word].nil?
        pathway << current_word
        current_word = @all_seen_words[current_word]
      end
      if pathway.length <= 1
        p "There is no valid path with those words."
      else
        p (pathway << source).reverse
      end
   end
end

WordChainer.new.run("killer", "dinner")
