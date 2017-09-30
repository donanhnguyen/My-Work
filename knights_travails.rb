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
      first_one = queue.shift
      @move_tree << first_one
      new_move_positions(first_one.value).each do |child_move|
        new_child_node = PolyTreeNode.new(child_move)
          first_one.add_child(new_child_node)
            end
      queue += first_one.children
    end
  end
  
  def find_path(ending_position)
    moves = [move_tree.first]
    until moves.empty?
      first_one = moves.shift
      return first_one if first_one.value == ending_position
      # binding.pry
      moves += first_one.children
    end
    nil
  end
  
  def trace_back_path(ending_node)
    return [ending_node.value] if ending_node.parent.nil?
    pathway_back = trace_back_path(ending_node.parent) + [ending_node.value]
    pathway_back
  end
  
  def new_move_positions(pos)
      possible_moves = valid_moves(pos)
      new_moves = possible_moves.select { |move| !visited_positions.include?(move) }
      @visited_positions += new_moves
      new_moves
      # binding.pry
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

toggaf = KnightPathFinder.new([0,0])
toggaf.build_move_tree
end_node = toggaf.find_path([7,0])
p toggaf.trace_back_path(end_node)

