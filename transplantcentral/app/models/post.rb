class Post < ApplicationRecord

    belongs_to :category
    belongs_to :city
    belongs_to :user

    validates :rating, numericality: { 
        only_integer: true,
        greater_than: 0,
        less_than:    6
      }

end
