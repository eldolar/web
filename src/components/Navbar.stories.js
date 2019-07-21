import React from 'react';
import { storiesOf } from '@storybook/react';

import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';

storiesOf('Navbar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Navbar updatedAt={ new Date().toString() } />)
