require_relative 'hash_map'
require_relative 'linked_list'
require "pry"

class LRUCache
  attr_reader :count
  def initialize(max, prc)
    @map = HashMap.new
    @store = LinkedList.new
    @max = max
    @prc = prc
    # binding.pry
  end

  def count
    @map.length
  end

  def get(key)
    if @map[key]
      node = @map[key]
      update_node!(node)
    else
      calc!(key)
    end
  end

  def to_s
    'Map: ' + @map.to_s + '\n' + 'Store: ' + @store.to_s
  end

  private

  def calc!(key)
    val = @prc.call(key)
    new = @store.append(key, val)
    @map[key] = new
    eject! if @map.count > @max
    return new.val
    # suggested helper method; insert an (un-cached) key
  end

  def update_node!(node)
    node.remove
    @map[node.key] = @store.append(node.key, node.val)
    return node.val
    # suggested helper method; move a node to the end of the list
  end

  def eject!
    oldest_node = @store.first
    oldest_node.remove
    @map.delete(oldest_node.key) 
  end
end
