import React, { createRef } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

class Maths {
  @observable a = 0
  @observable b = 0

  @computed get add() {
    return this.a + this.b
  }

  @computed get subtract() {
    return this.a - this.b
  }
}

@observer
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.firstInput = createRef()
    this.secondInput = createRef()
  }

  handleClick = e => {
    e.preventDefault()
    console.log(mathObj)
    mathObj.a = +this.firstInput.current.value
    mathObj.b = +this.secondInput.current.value
  }

  render() {
    return (
      <>
        <h1>Computed:</h1>
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
          <div>Addition: {mathObj.add}</div>
          <div>Subtraction: {mathObj.subtract}</div>
        </div>
      </>
    )
  }
}

/**
 * object creation
 */
const mathObj = new Maths()

export { Calculator, Maths, mathObj }
export default Calculator
