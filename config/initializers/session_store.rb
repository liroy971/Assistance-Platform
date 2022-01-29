if Rails.env == "development"
  Rails.application.config.session_store :cookie_store, key: "_assistance-platform", domain: "assistance-platform.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_localhost:3001"
end
