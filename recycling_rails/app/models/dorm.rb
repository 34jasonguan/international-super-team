class Dorm < ApplicationRecord
    has_many :users

    def numPeople
        dorm.users.count
    end
end
