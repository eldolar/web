import React from 'react';
import { storiesOf } from '@storybook/react';

import ToggleTheme from './ToggleTheme';

storiesOf('ToggleTheme', module)
  .add('default', () => <ToggleTheme />)
  .add('dark', () => <ToggleTheme />)
