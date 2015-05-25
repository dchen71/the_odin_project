class User < ActiveRecord::Base
	has_many :micropostss
	validates :name, presence: true
	validates :email, presence: true
end
