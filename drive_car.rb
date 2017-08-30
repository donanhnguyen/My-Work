class Car
  
  attr_accessor :current_speed, :max_speed
  
  def initialize
    @current_speed = 0
    @max_speed = 60
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