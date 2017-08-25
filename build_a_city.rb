puts "In this game you will construct your ideal city. Your city has no people in it, and it's up to you to add people according to how much of a certain class you want your city to be filled with, depending on their role in this city. Keep in mind that your city should have a MAX population of 1,000... so whenever you add people, don't add huge numbers."
puts "Also, when you get asked which class you want to add the number to, you have to type in exactly 'hunter', 'farmer', 'gatherer' and 'builder' for the test to work. If you type anything else, you have to start over."
puts "Just run the file and the game will do the rest."

class Build_A_City
  attr_accessor :hunter, :farmer, :gatherer, :builder, :total_population
  
  def initialize
    @hunter = 0
    @farmer = 0
    @gatherer = 0
    @builder = 0
  end
  
  def total_population
    @total_population = @hunter + @farmer + @gatherer + @builder
    puts "Hunters:  #{@hunter}"
    puts "Farmers:  #{@farmer}"
    puts "Gatherers:  #{@gatherer}"
    puts "Builders:  #{@builder}"
    puts "Your total population is #{@total_population}."
    print "\n"
  end
  
  def add_people
    until @total_population.to_i >= 1000
      puts "How many people do you want to add?"
      number_of_people = gets.chomp!
        if number_of_people == "none" || number_of_people == "0"
          self.total_population
          puts "You've stopped adding people."
          break
        end
        puts "What class do you want to add that number to?"
        class_to_add_to = gets.chomp.downcase
      if class_to_add_to == "hunter" || class_to_add_to == "hunters"
        @hunter += number_of_people.to_i
        print "\n"
        self.total_population
      elsif class_to_add_to == "farmer" || class_to_add_to == "farmers"
        @farmer += number_of_people.to_i
        print "\n"
        self.total_population
      elsif class_to_add_to == "gatherer" || class_to_add_to == "gatherers"
        @gatherer += number_of_people.to_i
        print "\n"
        self.total_population
      elsif class_to_add_to == "builder" || class_to_add_to == "builders"
        @builder += number_of_people.to_i
        print "\n"
        self.total_population
      else
        puts "That is not a valid class, try again."
        print "\n"
        self.total_population
        break
      end
    end 
      if @total_population.to_i > 1000
        puts "Your city is #{@total_population.to_i - 1000} people over the limit."
      elsif @total_population.to_i == 1000
        puts "Your city is full."
      end
  end
  
  def get_rid_of_people
    while true
      puts "How many people do you want to get rid of?"
      number_of_people = gets.chomp!
      if number_of_people == "none" || number_of_people == "0"
        self.total_population
        puts "You've stopped getting rid of people."
        break
      end
        puts "What class do you want to reduce?"
        class_to_reduce = gets.chomp.downcase
      if class_to_reduce == "hunter" || class_to_reduce == "hunters"
        @hunter -= number_of_people.to_i
        print "\n"
        self.total_popul3ation
      elsif class_to_reduce == "farmer" || class_to_reduce == "farmers"
        @farmer -= number_of_people.to_i
        print "\n"
        self.total_population
      elsif class_to_reduce == "gatherer" || class_to_reduce == "gatherers"
        @gatherer -= number_of_people.to_i
        print "\n"
        self.total_population
      elsif class_to_reduce == "builder" || class_to_reduce == "builders"
        @builder -= number_of_people.to_i
        print "\n"
        self.total_population
      else
        puts "That is not a valid class, try again."
        print "\n"
        self.total_population
        break
      end
    end
  end
  
  def overpopulated?
    if @total_population == 1000
      puts "Your city is full!"
    elsif @total_population > 1000
      puts "Your city is #{@total_population.to_i - 1000} people over the limit."
    elsif @total_population > 750 && @total_population < 1000
      puts "Your city almost has too many people!"
    else
      puts "Your city could use more people!"
    end
  end

  def distribution_of_labor
      print "\n"
    hunter_percentage = ((@hunter.to_f / @total_population.to_f) * 100.0).round(1)
      puts "Hunters are #{hunter_percentage} % of the population."
    farmer_percentage = ((@farmer.to_f / @total_population.to_f) * 100.0).round(1)
      puts "Farmers are #{farmer_percentage} % of the population."
    gatherer_percentage = ((@gatherer.to_f / @total_population.to_f) * 100.0).round(1)
      puts "Gatherers are #{gatherer_percentage} % of the population."
    builder_percentage = ((@builder.to_f / @total_population.to_f) * 100.0).round(1)
      puts "Builders are #{builder_percentage} % of the population."
    if hunter_percentage > 51
      print "\n"
      puts "There's over 51% hunters in your city. Hunters are responsible for hunting animals in the wild for your city to eat. If there are too many of them, who's going to cook, farm, or build?"
    elsif farmer_percentage > 51
      print "\n"
      puts "There's over 51% farmers in your city. Farmers are responsible for farming for materials for the city. If there's too many of them, who's going to cook, hunt animals, or build the city?"
    elsif gatherer_percentage > 51
      print "\n"
      puts "There's over 51% gatherers in your city. Gatherers are responsible for gathering supplies and cooking food for the city. If there's too many of them, who's going to hunt, farm for materials, or build the city?"
    elsif builder_percentage > 51
      print "\n"
      puts "There's over 51% builders in your city. Builders are responsible for construction, engineering, and operating machines to build the city. If there's too many of them, who's going to hunt for food, cook the food, or farm for materials?"
    elsif (22..27).include?(hunter_percentage) && (22..27).include?(farmer_percentage) && (22..27).include?(gatherer_percentage) && (22..27).include?(builder_percentage)
      print "\n"
      puts "There's an ideal percentage of each class in your city. Congratulations, your city is perfect!"
    end
  end
  
end

if $PROGRAM_NAME == __FILE__
  puts "What do you want your city to be named?"
  name = gets.chomp!
  name = Build_A_City.new
  puts "------------------------------------------------"
  name.add_people
  puts "------------------------------------------------"
  name.get_rid_of_people
  puts "------------------------------------------------"
  name.overpopulated?
  puts "------------------------------------------------"
  name.distribution_of_labor
  puts "------------------------------------------------"
  puts "You are done with the game... Play again?"
end

  
