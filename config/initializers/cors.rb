Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3000', 'localhost:8080'

    resource '/graphql', headers: :any, methods: :any, credentials: true
  end
end
