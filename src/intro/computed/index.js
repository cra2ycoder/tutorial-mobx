import React from 'react'
import ReactDOM from 'react-dom'
import { BirdShop } from './WDComponent'
import { Calculator as WDICalculator } from './WDIComponent'
import { Calculator } from './WODComponent'

ReactDOM.render(
  <>
    <BirdShop />
    <hr />
    <WDICalculator />
    <hr />
    <Calculator />
  </>,
  document.getElementById('computed')
)
