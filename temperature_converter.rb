class Temperature 
  
  attr_accessor :options, :temp
  
  def initialize(options = {})
    @options = options
  end
  
  def in_fahrenheit
    if @options.key?(:c)
      @options[:c] * 9 / 5.0 + 32
    else
      @options[:f]
    end
  end
  
  def in_celsius
    if @options.key?(:f)
      (@options[:f] - 32) * (5 / 9.0)
    else
      @options[:c]
    end
  end
  
  def self.from_celsius(temp)
   celsius = self.new(:c => temp)
  end
  
  def self.from_fahrenheit(temp)
   fahrenheit = self.new(:f => temp)
  end

end

  class Celsius < Temperature
    def initialize(temp, options = {})
      @options = options
      @options[:c] = temp
    end
  end 

  class Fahrenheit < Temperature
    def initialize(temp, options = {})
      @options = options
      @options[:f] = temp
    end
  end
