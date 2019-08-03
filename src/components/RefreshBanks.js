import React from 'react'
import iconSet from './../fonts/selection.json'
import IcomoonReact from 'icomoon-react'
import base from './../styles/_variables.scss'
import PropTypes from 'prop-types';

const RefreshBanks = ({ refresh }) => (
  <a href="/" onClick={ (event) => handleClick(event, refresh) }>
    <IcomoonReact
      iconSet={iconSet}
      color={base.text}
      size={16}
      icon="loop2" />
  </a>
)

function handleClick(e, refresh) {
  e.preventDefault()
  refresh()
}

RefreshBanks.propTypes = {
  refresh: PropTypes.func
}

export default RefreshBanks
