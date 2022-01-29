class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.integer :request_id
      t.text :description
      t.string :adress
      t.float :latitude
      t.float :longitude
      t.string :request_type
      t.boolean :status
      t.integer :requestor_id
      t.integer :recipient_id
      t.integer :conversation_id

      t.timestamps
    end
  end
end
