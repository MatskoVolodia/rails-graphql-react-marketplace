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

    field :category,
          ::Types::CategoryType,
          null: false,
          description: "Get a single category" do
      argument :id, ID, required: true
    end

    field :parent_categories,
          [::Types::CategoryType],
          null: false,
          description: "Get parent categories (eg for breadcrumbs)" do
      argument :id, ID, required: true, description: "Current category"
    end

    def products(category_id: nil)
      Product.where(category: prepend_children([category(id: category_id)]))
    end

    def categories(parent_category_id: nil)
      Category.where(parent_category_id: parent_category_id)
    end

    def category(id:)
      Category.find(id)
    end

    def parent_categories(id:)
      prepend_parent([category(id: id)])
    end

    private

    def prepend_parent(categories)
      parent_category = categories.first.parent_category
      return categories if parent_category.blank?

      prepend_parent(categories.prepend(parent_category))
    end

    def prepend_children(categories, children = categories)
      children = children.map(&:child_categories).flatten
      return categories if children.blank?

      prepend_children(categories.prepend(children).flatten.uniq, children)
    end
  end
end
