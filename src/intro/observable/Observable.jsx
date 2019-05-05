import React from 'react'
import { observer } from 'mobx-react'
import { counterStore } from './CounterStore'

@observer
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
        <h3>observable:</h3>
        <div>count: {counterStore.count}</div>
        <button onClick={this.doIncrement}>+</button>
        <button onClick={this.doDecrement}>-</button>
      </>
    )
  }
}

export { Counter }
export default Counter
