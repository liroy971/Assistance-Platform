class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :content
      t.integer :sender_id
      t.integer :receiver_id
      t.integer :conversation_id

      t.timestamps
    end
  end
end
