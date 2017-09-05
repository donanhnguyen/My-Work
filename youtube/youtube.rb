
class Youtube

  def subscribe(user: name, channel: name)
    user.subscribe_to(channel)
    channel.add_subscriber(user)
  end
  
  def view(user: name, video: name)
    if video.age_restricted?
      raise "This video is restricted to viewers 12 and older"
      return
    else
      video.views += 1
      user.watch(video)
    end
  end
  
end