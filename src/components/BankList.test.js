import React from 'react';
import ReactDOM from 'react-dom';
import BankList from './BankList';
import { defaultBanks } from './BankList.stories';

it('renders out each bank', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BankList banks={defaultBanks} />, div);

  const banks = div.querySelectorAll('div[data-test="bank-box"]');
  expect(banks.length).toBe(defaultBanks.length);

  ReactDOM.unmountComponentAtNode(div);
});
