import React from 'react'
import ReactDOM from 'react-dom'
import { Calculator } from './WDComponent'
import { Calculator as WDICalculator } from './WDIComponent'
import { Calculator as WODCalculator } from './WODComponent'

ReactDOM.render(
  <>
    <Calculator />
    <hr />
    <WDICalculator />
    <hr />
    <WODCalculator />
  </>,
  document.getElementById('computed')
)
