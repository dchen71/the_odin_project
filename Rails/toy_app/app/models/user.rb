class User < ActiveRecord::Base
	has_many :micropostss
end
