require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def test_upcase_name
    name = 'Yamada Tarou'
    expected_name = 'YAMADA TAROU'
    user = User.new
    user.name = name
    assert_equal(expected_name, user.upcase_name)
  end

  def test_downcase_name
    name = 'Yamada Tarou'
    expected = 'yamada tarou'
    user = User.new
    user.name = name
    assert_equal(expected, user.downcase_name)
  end

  def test_sha384_name
    name = 'Yamada Tarou'
    expected = '7a45b7b986d7e649beddc2daed5d89f6d270dbba6b6bc83f8a2fd8ef6a3411cf892af644c0e9f74f5dd142cd9594a45a'
    user = User.new(name: name)
    assert_equal(expected, user.sha384_name)
  end
end
