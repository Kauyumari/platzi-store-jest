import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/provider.mock';

describe('Testing <Header />', () => {
  test('Render', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.length).toEqual(1);
  });

  test('Title is rendering', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.Header-title').text())
      .toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Match Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});
