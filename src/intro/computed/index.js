import React from 'react'
import ReactDOM from 'react-dom'
import { BirdShop } from './WDComponent'
import { BirdShop as WDIBirdShop } from './WDIComponent'

ReactDOM.render(
  <>
    <BirdShop />
    <hr />
    <WDIBirdShop />
  </>,
  document.getElementById('computed')
)
