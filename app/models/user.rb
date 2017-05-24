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

  def sha256_name
    sha256 = Digest::SHA256.new
    sha256.update(name).to_s
  end
end
