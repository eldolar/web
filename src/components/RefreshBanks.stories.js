import React from 'react';
import { storiesOf } from '@storybook/react';
import RefreshBanks from './RefreshBanks';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

const store = {
  dispatch: () => {},
  subscribe: () => {},
  getState: () => ({})
};

storiesOf('RefreshBanks', module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>
  ))
  .add('default', () => <RefreshBanks />);
