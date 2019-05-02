import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from './WODComponent'
import { Counter as WDCounter } from './WDComponent'
import { Counter as WDICounter } from './WDIComponent'

ReactDOM.render(
  <>
    <Counter />
    <WDCounter />
    <WDICounter />
  </>,
  document.getElementById('observable')
)
