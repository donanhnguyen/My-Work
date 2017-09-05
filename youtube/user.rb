class User
  
  attr_accessor :name, :email, :age, :subscriptions, :history, :privacy
  
  def initialize(user = {})
    @name = user[:name]
    @email = user[:email]
    @age = user[:age]
    @subscriptions = []
    @history = []
    @privacy = user[:privacy]
  end

  def subscribe_to(channel)
    @subscriptions << channel unless (@subscriptions.include? channel)
  end
  
  def watch(video)
    return if @privacy == true
      @history.unshift(video) unless (@history.include? video)
    if @history.include? video
      @history.delete(video)
      @history.unshift(video)
    end
  end

end
