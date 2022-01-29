class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
    attributes :id, :first_name, :last_name, :adress, :email, :password_digest, :identity, :created_at, :updated_at

    def identity
      return unless object.identity.attached?

      object.identity.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: identity_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
      end

      def identity_url
       url_for(object.identity)

      end

  end
