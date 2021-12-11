module Types
  class CategoryType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :parent_category, ::Types::CategoryType, null: true
    field :child_categories, [::Types::CategoryType], null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
