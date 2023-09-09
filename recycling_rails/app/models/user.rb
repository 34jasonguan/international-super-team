class User < ApplicationRecord
    belongs_to :dorm, optional: true
end
