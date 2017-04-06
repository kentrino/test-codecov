class User < ApplicationRecord
  def upcase_name
    name.upcase
  end

  def downcase_name
    name.downcase
  end
end
