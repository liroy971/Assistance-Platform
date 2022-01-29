class AddIdentityToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :identity, :string
  end
end
