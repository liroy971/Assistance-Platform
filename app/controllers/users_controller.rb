class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy, :patch]
    def index
        @users = User.all
           if @users
              render json:{

                 user: @users

               }
          else
              render json: {
              status: 500,
              errors: ['no users found']
          }
         end
    end
      # GET /users/1
    def show
      @user = User.find(params[:id])
         if @user
            render json: {
            user: @user
         }
         else
            render json: {
            status: 500,
            errors: ['user not found']
          }
         end
    end
    # GET /users/new
    def new
        @user = User.new

    end
    # GET /users/1/edit
    def edit
    end
      # POST /users.json
    def create
        @user = User.new(user_params)
        if @user.save
          auth_token = Knock::AuthToken.new payload: { sub: @user.id }
          format.json {
            render json:{
              user: @user,
              token: auth_token,
            }, status: :created
            }

        else
            puts @user.errors.full_messages, status: :unprocessable_entity

        end
    end
    def update
      @user.update(user_params)
      @identity_url = rails_blob_path(@user.identity)
      render json: {user: @user}
  end
    def destroy
        @user.destroy
    end
    private

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def auth_token
      if entity.respond_to? :to_token_payload
        AuthToken.new payload: entity.to_token_payload
      else
        AuthToken.new payload: { sub: entity.id }
      end
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:auth).permit(:first_name, :last_name, :adress, :email, :password, :password_confirmation,:identity)

    end
end
