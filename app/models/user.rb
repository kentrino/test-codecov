class User < ApplicationRecord
  def upcase_name
    name.upcase
  end

  def downcase_name
    name.downcase
  end

  def base64_name
    Base64.encode64(name)
  end

  def sha384_name
    sha384 = Digest::SHA384.new
    sha384.update(name).to_s
  end
end
