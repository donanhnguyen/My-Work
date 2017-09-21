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
  
  def explore_current_words
    new_current_words = []
      @current_words.each do |word|
        adjacent_words(word).each do |adj_word|
            if !@all_seen_words.include?(adj_word)
              @all_seen_words[adj_word] = word
               new_current_words << adj_word
        
              end
            end
        end
      new_current_words
  end
  
  def run(source, target)
    @current_word = source
    @current_words << @current_word
    @all_seen_words[source] = nil
    until (@all_seen_words.include? target)
      @current_words = explore_current_words
    end
    p build_path(target)
  end
  
   def build_path(target)
      return [target] if all_seen_words[target] == nil
      build_path(all_seen_words[target]) + [target]
   end

end

WordChainer.new.run("killer", "dinner")

