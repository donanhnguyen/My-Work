class User
  
  attr_reader :name, :email, :age, :subscriptions, :history, :privacy
  
  def initialize(name:, email:, age:, privacy: false)
    @name = name
    @email = email
    @age = age
    @subscriptions = []
    @history = []
    @privacy = privacy
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

