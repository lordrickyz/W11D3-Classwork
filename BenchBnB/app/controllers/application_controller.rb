class ApplicationController < ActionController::Base
  # celll
  helper_method :current_user, :logged_in?

  # protect_from_forgery with: :exception

  def current_user
    @user = User.find_by(session_token: session[:session_token])
    if @user
      @user
    else
      nil
    end 
  end 

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def logged_in?
    !!current_user
  end 

  def login!(user)
    session[:session_token] = user.session_token
  end 

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_out
    # Prevent logged-in users from seeing certain pages
    redirect_to user_url(current_user) if logged_in?
  end
end
