import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';
import { Provider } from 'react-redux';

const store = {
  dispatch: () => {},
  subscribe: () => {},
  getState: () => ({})
};

storiesOf('Navbar', module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>
  ))
  .add('default', () => <Navbar updatedAt={ new Date().toString() } />);
