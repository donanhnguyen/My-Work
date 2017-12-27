class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true

    def is_password?(given_password)
        BCrypt::Password.new(self.password_digest).is_password?(given_password)
    end
    
    def password=(given_password)
        self.password_digest = BCrypt::Password.create(given_password)
    end


end
