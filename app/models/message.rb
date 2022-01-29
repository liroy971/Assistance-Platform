class Message < ApplicationRecord
validates :content, presence: true
validates :user_id, presence: true
validates :conversation_id, presence: true


 belongs_to :user
 belongs_to :conversation
end
