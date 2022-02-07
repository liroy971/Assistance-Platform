# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Rails version: 6.1.4.4
Ruby version: ruby 3.0.3p157
(2021-11-24 revision 3fb7d2cadc) [x64-mingw32]


pour désactiver le profiler/?pp=disable

rails generate controller sessions index show new create edit update destroy
rails generate controller conversations index show new create edit update destroy
rails generate controller users index show new create edit update destroy
rails generate controller requests index show new create edit update destroy

rails generate model conversation conversation_id:integer title:string sender_id:integer receiver_id:integer request_id:integer
rails generate model message content:text sender_id:integer receiver_id:integer conversation_id:integer
rails generate model requests request_id:integer description:text adress:string latitude:float longitude:float request_type:string status:boolean requestor_id:integer recipient_id:integer conversation_id:integer
rails generate model user user_id:integer first_name:string last_name:string email:string adress:string

(type == string, integer, boolean, text, datetime,…)
