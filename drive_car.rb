class Car
  
  attr_accessor :current_speed, :max_speed
  
  def initialize(max_speed = nil)
    @current_speed = 0
    if max_speed
      @max_speed = max_speed
    else
      @max_speed = 60
    end
  end
  
  def drive
    until @current_speed == @max_speed
      accelerate
      puts "Your current_speed is #{current_speed}."
    end
    puts "You've reached max_speed of #{max_speed}."
    
  end
  
  def accelerate
    puts "Vroom!"
    @current_speed += 1
  end
end

puts "What car do you want to drive?"
name = gets.chomp.upcase
puts "Your car is a #{name}."
name = Car.new
name.drive