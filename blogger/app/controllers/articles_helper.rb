#Helper module to retreive title and body data from parameters

module ArticlesHelper

  def article_params
    params.require(:article).permit(:title, :body)
  end

end
