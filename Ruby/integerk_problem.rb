def arraycount(array, integerk)
    count_hash = {}
    
    array.each do |num|
      if count_hash.keys.include?("#{num}")
        count_hash["#{num}"] += 1
      else
        count_hash["#{num}"] = 1
      end
    end
    
    new_hash = count_hash.sort_by {|key, value| value}.to_h
    new_hash_keys = new_hash.keys
    new_array = []
    
    integerk.times {new_array << new_hash_keys.pop}
    
    new_array2 = []
    new_array.each do |el|
      new_array2 << el unless el.nil?
    end
    
    if new_array2.length <= 1
      return "array doesn't have enough repeating numbers."
    else
      return new_array2
    end  
  end
  
  test_array = [1, 2, 1, 1, 1, 1, 4, 4, 4, 2, 4, 5, 6, 3, 9]
  p arraycount(test_array, 3)
  
  
  
  