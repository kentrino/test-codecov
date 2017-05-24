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

  def sha1_name
    Digest::SHA1.hexdigest name
  end
end
