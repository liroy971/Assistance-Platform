class RequestsController < ApplicationController
  before_action :set_ticket, only: [:show, :edit, :update]
   before_action :set_options, only: [:new, :create, :edit, :update, :show]
   before_action :require_user, except: [:show, :index]

   def index
     @project_id = params[:project]
     @status = params[:status]
     @tag_id = params[:tag]
     @requests = Request.filter_by(project_id: @project_id,
       status: @status, tag_id: @tag_id)
     @statuses = Request.statuses
   end

   def new
     @request = Request.new
   end

   def show
     @comments = Comment.where(ticket_id: params[:id])
     @comment = Comment.new
   end

   def create
     @request = Request.new(ticket_params)
     @request.user = current_user

     if @request.save
       flash[:notice] = "Your request \"#{@request.name}\" was created!"
       redirect_to tickets_path
     else
       render :new
     end
   end

   def edit
   end

   def update
     update_item @request, request_params, request_path(@request)
   end

   def destroy
     destroy_item Request, requests_path
   end

   private

   def set_options
     @statuses = Request.status_options
   end

   def set_ticket
     @request = Request.find(params[:id])
   end

   def ticket_params
     params.require(:request).permit(:name, :body, :status, :project_id, :assignee_id, tag_ids: [])
   end
end
