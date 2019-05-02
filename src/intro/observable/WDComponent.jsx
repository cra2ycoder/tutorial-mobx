import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class CounterStore {
  @observable count = 0
}

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
        <h3>Counter (React.Component + Decorator)</h3>
        <div>count: {counterStore.count}</div>
        <button onClick={this.doIncrement}>+</button>
        <button onClick={this.doDecrement}>-</button>
      </>
    )
  }
}

const counterStore = new CounterStore()

export { Counter, counterStore }
export default Counter
