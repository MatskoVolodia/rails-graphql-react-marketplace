module Mutations
  module Products
    class Create < ::Mutations::BaseMutation
      argument :title, String, required: true
      argument :price, Float, required: true
      argument :category_id, ID, required: true

      field :errors, [String], null: true
      field :product, Types::ProductType, null: true

      def resolve(title:, price:, category_id:)
        result = ::Products::Create.call(title: title, price: price, category_id: category_id)

        {
          product: result.product,
          errors: result.error_messages
        }
      end
    end
  end
end