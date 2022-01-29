class CreateConversations < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations do |t|
      t.integer :conversation_id
      t.string :title
      t.integer :sender_id
      t.integer :receiver_id
      t.integer :request_id

      t.timestamps
    end
  end
end
