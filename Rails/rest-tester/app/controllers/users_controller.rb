class UsersController < ApplicationController
	def index
		@name="Coo coo"
	end

	def edit
		@name = "editboys"
	end

	def create
		@name = "createboys"
	end

	def new
		@name = "saveboys"
	end

	def show
		@name = "showboys"
	end
end
