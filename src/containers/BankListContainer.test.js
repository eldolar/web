import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import BankList from './../components/BankList';
import BankListContainer from './BankListContainer';

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

describe('container <BankListContainer />', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();

    const store = storeFake({ loading: true, banks: [] });

    wrapper = mount(
      <Provider store={store}>
        <BankListContainer />
      </Provider>
    );

    container = wrapper.find(BankListContainer);
    component = container.find(BankList);
  });

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'banks',
      'loading',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });
});
