class Category < ApplicationRecord
  belongs_to :parent_category, class_name: Category.name, optional: true

  has_many :child_categories, foreign_key: :parent_category_id,
           class_name: Category.name, dependent: :destroy

  has_many :products, dependent: :destroy
end
