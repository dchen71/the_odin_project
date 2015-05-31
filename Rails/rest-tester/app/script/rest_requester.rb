# app/script/rest_requestor.rb
require 'rest-client'
url = "http://localhost:3000/users/show"
puts RestClient.get(url)
