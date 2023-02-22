// import initialState from '../../initialState';
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/product.mock';

describe('Reducers', () => {
  const initialState = items => ({
    cart: items,
  });
  const payload = ProductMock;

  test('Return initia state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState([]), action)).toEqual(expected);
  });

  test('REMOVE_TO_CART', () => {
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducer(initialState([ProductMock]), action)).toEqual(expected);
  });
});
