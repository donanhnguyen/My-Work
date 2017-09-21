require "pry"
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
    return self if self.value == target
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
