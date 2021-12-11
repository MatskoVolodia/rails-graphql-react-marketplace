module Types
  class ProductType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :price, Float, null: true
    field :category, ::Types::CategoryType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
