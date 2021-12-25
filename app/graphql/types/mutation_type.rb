module Types
  class MutationType < Types::BaseObject
    field :create_product, mutation: Mutations::Products::Create, description: 'Add a new product'

  end
end
