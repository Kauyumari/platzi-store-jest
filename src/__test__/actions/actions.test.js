import actions from '../../actions';
import productMock from '../../__mocks__/product.mock';

describe('Actions', () => {
  const payload = productMock;
  const expected = action => ({
    type: action,
    payload,
  });

  test('addToCart Action', () => {
    expect(actions.addToCart(payload))
      .toEqual(expected('ADD_TO_CART'));
  });

  test('removeFromCart Action', () => {
    expect(actions.removeFromCart(payload))
      .toEqual(expected('REMOVE_FROM_CART'));
  });
});
