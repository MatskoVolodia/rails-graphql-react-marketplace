module Products
  class Create < ::ApplicationService
    def call
      context.product = product

      return if product.save

      context.error_messages = product.errors.full_messages
      context.fail!
    end

    private

    def product
      @product ||= ::Product.new(
        title: context.title,
        price: context.price,
        category_id: context.category_id
      )
    end
  end
end