class Post < ApplicationRecord
    validates :subject, :body, presence: true

    has_many :comments, dependent: :destroy

end
