import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';
import ProviderMock from '../../__mocks__/provider.mock';

describe('Testing <Footer />', () => {
  const footer = mount(
    <ProviderMock>
      <Footer />
    </ProviderMock>,
  );

  test('Render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Title render', () => {
    expect(footer.find('.Footer-title').text())
      .toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Check component UI', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
