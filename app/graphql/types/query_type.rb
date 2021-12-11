module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :products,
          [::Types::ProductType],
          null: false,
          description: "Products field" do
      argument :category_id, ID, required: false
    end

    field :categories,
          [::Types::CategoryType],
          null: false,
          description: "Categories field" do
      argument :parent_category_id, ID, required: false
    end

    def products(category_id: nil)
      Product.where(category_id: category_id)
    end

    def categories(parent_category_id: nil)
      Category.where(parent_category_id: parent_category_id)
    end
  end
end
