require "graphql/rake_task"

GraphQL::RakeTask.new(
  schema_name: "MarketplaceSchema",
  directory: "./frontend",
  dependencies: [:environment]
)
