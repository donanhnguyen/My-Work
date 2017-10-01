require "pry"

class KnightPathFinder
    MOVES = [
        [2, 1],
        [2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
        [-2, 1],
        [-2, -1]
]

attr_accessor :starting_position, :move_tree, :visited_positions

  def initialize(starting_position)
    @starting_position = starting_position
    @move_tree = []
    @visited_positions = [starting_position]
  end

  def build_move_tree
    queue = [PolyTreeNode.new(@starting_position)]
    until queue.empty?
      first_in_line = queue.shift
      @move_tree << first_in_line
      child_positions = new_move_positions(first_in_line.value)
        child_positions.each do |child_pos|
          new_child_node = PolyTreeNode.new(child_pos)
          first_in_line.add_child(new_child_node)
        end
      first_in_line.children.each do |child_node|
        queue << child_node
      end
    end
  end
  
  def find_path(end_pos)
    queue = [@move_tree.first]
    until queue.empty?
      first_in_line = queue.shift
      return first_in_line if first_in_line.value == end_pos
      first_in_line.children.each do |child_node|
        queue << child_node
      end
    end
    nil
  end
  
  def trace_path_back(ending_node)
    pathway = []
    current_node = ending_node
    until current_node.parent.nil?
    pathway << current_node.value
      current_node = current_node.parent
    end
      (pathway << @starting_position).reverse
  end
  
  def new_move_positions(pos)
    new_positions = valid_moves(pos)
    new_moves = new_positions.select {|position| !@visited_positions.include?(position)}
    @visited_positions += new_moves
    new_moves
  end

  def valid_moves(pos)
    valid_moves_at_the_end = []
    MOVES.each do |move|
        row, col = pos
        x, y = move
        valid_moves_at_the_end << [row + x, col + y] unless (row + x < 0 || row + x > 7) || (col + y < 0 || col + y > 7)
    end
    valid_moves_at_the_end
  end
  
end 

class PolyTreeNode

  attr_accessor :value, :children, :parent
  
  def initialize(value = nil)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(node)
    root = self.parent
    if root != nil && (root.children.include? self)
      root.children.delete(self)
    end
    @parent = node
    root = self.parent
    if root != nil && (!root.children.include? self)
      root.children << self
    end
    
  end
  
  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    if child != nil && (!self.children.include? child)
      raise "That is not a child."
    end
    child.parent = nil
  end
  
  def dfs(target)
    return self if self.value == target
    self.children.each do |child|
      search_result = child.dfs(target)
      return search_result unless search_result.nil?
    end
    nil
  end

  def bfs(target)
    queue = [self]
    until queue.empty?
      first_one = queue.shift
      return first_one if first_one.value == target
      first_one.children.each do |child|
        queue << child
      end
    end
    nil
  end

end

hi = KnightPathFinder.new([0, 0])
hi.build_move_tree
end_node = hi.find_path([7, 6])
p hi.trace_path_back(end_node)

