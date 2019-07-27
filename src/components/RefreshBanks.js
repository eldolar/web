import React from 'react'
import iconSet from './../fonts/selection.json'
import IcomoonReact from 'icomoon-react'
import base from './../styles/_variables.scss'

const RefreshBanks = () => (
  <a href="/">
    <IcomoonReact
      iconSet={iconSet}
      color={base.lighttextdefault}
      size={16}
      icon="loop2" />
  </a>
)

export default RefreshBanks
