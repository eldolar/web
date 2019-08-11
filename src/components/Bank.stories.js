import React from 'react';
import { storiesOf } from '@storybook/react';

import Bank from './Bank';

export const bank = {
  name: 'Santander Rio',
  buy: '40.56',
  sell: '43.04'
};

const zeroBank = Object.assign({}, bank, { buy: '0', sell: '0' });
export const nanBank = Object.assign({}, bank, { buy: 'NaN', sell: 'NaN' });
const emptyBank = Object.assign({}, bank, { buy: '', sell: '' });

storiesOf('Bank', module)
  .add('default', () => <Bank bank={bank} />)
  .add('zero', () => <Bank bank={zeroBank} />)
  .add('naBank', () => <Bank bank={nanBank} />)
  .add('no-data', () => <Bank bank={emptyBank} />);
