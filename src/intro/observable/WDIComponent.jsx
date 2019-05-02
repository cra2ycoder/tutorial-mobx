import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Counter extends React.Component {
  @observable count = 0

  constructor(props) {
    super(props)
  }

  doIncrement = e => {
    e.preventDefault()
    this.count++
  }

  doDecrement = e => {
    e.preventDefault()
    this.count--
  }

  render() {
    return (
      <>
        <h3>Counter (React.Component + Decorator + Inline Method)</h3>
        <div>count: {this.count}</div>
        <button onClick={this.doIncrement}>+</button>
        <button onClick={this.doDecrement}>-</button>
      </>
    )
  }
}

export { Counter }
export default Counter
