class User < ApplicationRecord
  def upcase_name
    name.upcase
  end
end
