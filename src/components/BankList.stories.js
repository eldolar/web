import React from 'react';
import { storiesOf } from '@storybook/react';

import BankList from './BankList';
import { bank, bankNoData } from './Bank.stories'

export const defaultBanks = [
  { ...bank, name: 'Banco Nacion' },
  { ...bank, name: 'Santander Rio' },
  { ...bank, name: 'Patagonia' },
  { ...bankNoData, name: 'BBVA' },
]

storiesOf('BankList', module)
  .add('default', () => <BankList banks={defaultBanks} />)
  .add('loading', () => <BankList loading banks={[]} />)
  .add('empty', () => <BankList banks={[]} />)
