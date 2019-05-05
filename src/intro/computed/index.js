import React from 'react'
import ReactDOM from 'react-dom'
import { BirdShop } from './WDComponent'
import { BirdShop as WDIBirdShop } from './WDIComponent'
import { Calculator } from './WODComponent'

ReactDOM.render(
  <>
    <BirdShop />
    <hr />
    <WDIBirdShop />
    <hr />
    <Calculator />
  </>,
  document.getElementById('computed')
)
