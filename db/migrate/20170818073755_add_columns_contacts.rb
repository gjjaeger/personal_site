class AddColumnsContacts < ActiveRecord::Migration[5.0]
  def change
    add_column :contacts, :title, :string
    add_column :contacts, :company, :string
    add_column :contacts, :phone_number, :string
    add_column :contacts, :budget, :integer
  end
end
