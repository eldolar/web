import React from 'react';
import { storiesOf } from '@storybook/react';

import Bank from './Bank';

export const bank = {
  name: 'Santander Rio',
  buy: '40.56',
  sell: '43.04',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const bankNoData = {
  name: 'Santander Rio',
  buy: '',
  sell: ''
};

storiesOf('Bank', module)
  .add('default', () => <Bank bank={bank} />)
  .add('no-data', () => <Bank bank={bankNoData} />)
