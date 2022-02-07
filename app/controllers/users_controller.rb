class UsersController < ApplicationController
before_action :set_user, only: [:show, :edit, :update, :destroy, :patch]
    def index
        @users = User.all.with_attached_identity

          render json:  @users
    end
      # GET /users/1
    def show
        render json: @user
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
          render json: {user: @user,token: auth_token,}, status: :created

        else
            puts @user.errors.full_messages, status: :unprocessable_entity

        end
    end
  def update
      @user.update(user_params)
      @identity_url = rails_representation_path(@user.identity)
      render json: {user: @user, identity_url: @identity_url}
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
