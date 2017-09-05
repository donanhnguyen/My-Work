
class Youtube

  def subscribe(user:, channel:)
    user.subscribe_to(channel)
    channel.add_subscriber(user)
  end
  
  def view(user:, video:)
    if video.age_restricted?
      raise "This video is restricted to viewers #{video.age_restriction} and older"
    else
      video.add_view
      user.watch(video)
    end
  end
  
end