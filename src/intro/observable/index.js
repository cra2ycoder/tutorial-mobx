import React from 'react'
import ReactDOM from 'react-dom'
import { observable, decorate } from 'mobx'

/**
 * @example
 * with decorators
 */
class Counter {
  @observable count = 0
}

// object initialization
var counter = new Counter()

setInterval(() => {
  counter.count += 1
  console.log(`counter.count: ${counter.count}`)
}, 1000)

/**
 * @example
 * without decorators
 */

class NDCounter {
  count = 0
}

decorate(NDCounter, {
  count: observable,
})

var ndCounter = new NDCounter()
setInterval(() => {
  ndCounter.count += 1
  console.log(`ndCounter.count: ${ndCounter.count}`)
}, 1000)

// ReactDOM.render(<></>, document.getElementById('observable'))
