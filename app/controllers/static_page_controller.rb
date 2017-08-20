class StaticPageController < ApplicationController
  def home
  end

  def help
  end

  def about

  end

  def portfolio

  end
  def contact
    @contact = Contact.new()
  end
end
