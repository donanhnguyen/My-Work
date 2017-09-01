# Code Scenario Requirements:

# Base Car Class

# + current speed (property) – default value 0

# + accelerate (method)

# + drive (method)

# + brand (property) - default value ‘unknown’

# + max speed (property) - default value 0

# Camaro Car Class

# + Inherits Base Car

# + brand (property) - default value ‘Chevy’

# + max speed (property) – default value 200

# Code Scenario:

# In this example we will create an instance of Camaro and tell it to drive,
# we will assume it’s moving in a straight line and there are no other
# driving factors.  The car will accelerate until it hits its max speed.
# It is required that drive will call accelerate. It is required accelerate
# will increment the current speed by 1.  Once the Camaro reaches max speed
# it should stop accelerating and print that it hit the cars max speed.  
# The execution of drive should then also stop.

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

if $PROGRAM_NAME == __FILE__
puts "What car do you want to drive?"
name = gets.chomp.upcase
puts "Your car is a #{name}."
name = Car.new
name.drive
end