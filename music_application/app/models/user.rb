class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  
  
  after_initialize :ensure_session_token
  
  
  def self.find_by_credentials(given_email, given_password)
    selected_user = User.find_by(email: given_email)
    
    if !selected_user.nil? && selected_user.is_password?(given_password)
      selected_user
    else
       nil
    end
  end
  
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
  def password=(given_password)
    self.password_digest = BCrypt::Password.create(given_password)
  end
  
  def is_password?(given_password)
    BCrypt::Password.new(self.password_digest).is_password?(given_password)
  end
  
  
  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  
end
