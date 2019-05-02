import React from 'react'
import { observable, decorate } from 'mobx'
import { observer } from 'mobx-react'

/**
 * @description
 * store declaring
 */
class CounterStore {
  count = 0
}

/**
 * @description
 * component declaring
 */
class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  doIncrement(e) {
    e.preventDefault()
    counterStore.count++
  }

  doDecrement(e) {
    e.preventDefault()
    counterStore.count--
  }

  render() {
    return (
      <>
        <h3>Counter (React.Component + No Decorator)</h3>
        <div>count: {counterStore.count}</div>
        <button onClick={this.doIncrement}>+</button>
        <button onClick={this.doDecrement}>-</button>
      </>
    )
  }
}

/**
 * @description
 * setup
 */

// assign store with decorate
decorate(CounterStore, {
  count: observable,
})

// make the component to be observer
observer(Counter)

// creating an object for store
const counterStore = new CounterStore()

// exporting
export { Counter, counterStore }
export default Counter
