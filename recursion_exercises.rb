#recursive range

def range(start, end_shit)
  return [] if end_shit <= start
  array = ((start + 1)...end_shit)
  new = range(array.first, array.last)
  new.unshift(start)
end

p range(1, 5)

#recursive sum
def iteration_sum(array)
  sum = 0
  array.each {|n| sum += n}
  sum
end

def recursive_sum(array)
  return 0 if array.length == 0
  new = array[1..-1]
  recursive_sum(new) + array.first
end

p recursive_sum([1, 2, 3, 4])


#exponential
def exp(number, power)
  return number if power == 1
  number * exp(number, (power - 1))
end

p exp(2, 3)

#deep duplicate
def deep_dup(array)
  new_array = []
  array.each do |el|
    new_array << el.dup
  end
  new_array
end

def deep_dup(obj)
  return obj unless obj.is_a?(Array)
  obj.map do |el|
    deep_dup(el)
  end
end


#array subsets

def subsets(array)
  return [array] if array.empty?
  
  last_element = array.pop
  remaining_array = array
  remaining_subsets = subsets(remaining_array)
  remaining_subsets_with_last_el = remaining_subsets.map do |subset|
    subset + [last_element]
  end
  remaining_subsets + remaining_subsets_with_last_el
end

p subsets([]) # => [[]]
p subsets([1]) # => [[], [1]]
p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
p subsets([1, 2, 3]) #=> [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


#binary search

def bsearch(array, target)
  return nil if array.empty?
  array = array.sort
  middle_index = array.length / 2
  if array[middle_index] == target
    return middle_index
  end
  if target < array[middle_index]
  left_half = array[0...middle_index]
    bsearch(left_half, target)
    elsif target > array[middle_index]
    right_half = array[(middle_index + 1)..-1]
    new_answer = bsearch(right_half, target)
      if new_answer.nil?
        return nil
      else
        new_answer + middle_index + 1
      end
  end
end

p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
p bsearch([1, 2, 3, 5, 6, 7, 8, 9], 1) # => 0
p bsearch([1, 4, 5, 6, 7, 8], 8) # => 5
p bsearch([1, 3, 4, 5, 6, 9], 7) # => nil