import React from 'react';
import { storiesOf } from '@storybook/react';

import RefreshBanks from './RefreshBanks';

storiesOf('RefreshBanks', module)
  .add('default', () => <RefreshBanks />)
  .add('active', () => <RefreshBanks />)
