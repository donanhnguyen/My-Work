class Board
  
  attr_accessor :grid
  
  def initialize(grid = nil)
    if grid
      @grid = grid
    else
      @grid = Board.default_grid
    end
  end

  def self.default_grid
    Array.new(10) {Array.new(10)}
  end
  
  def [](position)
    @grid[position[0]][position[1]]
  end
  
  def []=(position, new_position)
    @grid[position[0]][position[1]] = new_position
  end
  
  def count
    number_of_ships = 0
    @grid.each do |row|
      row.each do |coordinate|
      if coordinate == :s
        number_of_ships += 1
      end
      end
    end
    number_of_ships
  end
  
  def empty?(position = false)
    if position && @grid[position[0]][position[1]].nil?
      return true
    end
    @grid.each do |row|
      if row.any? { |coordinate| coordinate == :s}
        return false
        end
      end
  end
  
  def full?
    @grid.each do |row|
    row.each do |coordinate|
    if coordinate == nil
      return false
      end
    end
    end
    true
  end
  
  def place_random_ship
    if full?
      raise "Error!"
    end
    until !board_is_empty?
      @grid[random_position[0]][random_position[1]] = :s
    end
  end
  
  def random_position
    [rand(@grid.length), rand(@grid.length)]
  end
  
  def board_is_empty?
    @grid.each do |row|
    row.each do |coordinate|
    if coordinate != nil
      return false
      end
    end
    end
    true
  end
  
  def won?
    @grid.each do |row|
    row.each do |coordinate|
    if coordinate == :s
      return false
      end
      end
    end
    true
  end
end
