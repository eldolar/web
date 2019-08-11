import React from 'react';
import { shallow } from 'enzyme';

import Bank from './Bank';
import { nanBank, bank } from './Bank.stories';
import styles from '../styles/Bank.module.scss';

describe('<Bank /> without data', () => {
  it('has no data class', () => {
    const wrapper = shallow(<Bank bank={nanBank} />);
    expect(wrapper.hasClass(styles.no_data)).toEqual(true);
  });
});

describe('<Bank /> with data', () => {
  it('does not have no data class', () => {
    const wrapper = shallow(<Bank bank={bank} />);
    expect(wrapper.hasClass(styles.no_data)).toEqual(false);
  });
});
