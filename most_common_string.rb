

def most_common_string(sentence)
  # frequency hash
  word_tracker = {}
  split_sentence = sentence.downcase.split(" ")
  split_sentence.each do |word|
    if word_tracker.include? word
      word_tracker[word] += 1
    else
      word_tracker[word] = 1
    end
  end
  
  
  highest_count = 0
  mcs = nil
  word_tracker.keys.each do |word|
    if word_tracker[word] > highest_count
      highest_count = word_tracker[word]
      mcs = word
    end
  end
  if word_tracker.values.all? {|value| value == 1}
    puts "There is no most common string."
  else
  puts "The most common string is \"#{mcs}\"."
 end
end

puts most_common_string("The cat in the hat bought two other cats and the cat now has two other cats")


#max
def most_common_string(sentence)
  word_tracker = {}
  split_sentence = sentence.downcase.split(" ")
  split_sentence.each do |word|
    if word_tracker.include? word
      word_tracker[word] += 1
    else
      word_tracker[word] = 1
    end
  end
  
  max_word = word_tracker.keys.max_by { |key| word_tracker[key] }
  
  final = word_tracker[max_word] == 1 ? "no max" : max_word
end

p most_common_string("foo bar foo")

