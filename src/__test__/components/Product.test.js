import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/provider.mock';
import ProductMock from '../../__mocks__/product.mock';
import Product from '../../components/Product';

describe('Testing <Product />', () => {
  test('Render', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );

    expect(product.length).toBe(1);
  });

  test('Click add to cart', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );

    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
