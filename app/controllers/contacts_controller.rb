class ContactsController < ApplicationController
  def new
    @contact=Contact.new()
  end
  def create
    @contact = Contact.new(contact_params)
    respond_to do |format|
      if @contact.save
        format.html { redirect_to :back, notice: 'Your message has been sent.' }
        format.json { render :show, status: :created, location: @contact }
      else
        format.html { render :new }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :title, :company, :email, :phone_number, :budget, :message)
  end
end
