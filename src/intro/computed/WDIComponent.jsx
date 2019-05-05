import React, { createRef } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Calculator extends React.Component {
  @observable a = 0
  @observable b = 0

  @computed get add() {
    return this.a + this.b
  }

  @computed get subtract() {
    return this.a - this.b
  }

  constructor(props) {
    super(props)

    this.firstInput = createRef()
    this.secondInput = createRef()
  }

  handleClick = e => {
    e.preventDefault()
    this.a = +this.firstInput.current.value
    this.b = +this.secondInput.current.value
  }

  render() {
    return (
      <>
        <h1>Calculator</h1>
        <br />
        <form>
          <input placeholder="enter your first number" ref={this.firstInput} />
          <input
            placeholder="enter your second number"
            ref={this.secondInput}
          />
          <button onClick={this.handleClick}>Calculate</button>
        </form>
        <div>
          <div>Addition: {this.add}</div>
          <div>Subtraction: {this.subtract}</div>
        </div>
      </>
    )
  }
}

export { Calculator }
export default Calculator
