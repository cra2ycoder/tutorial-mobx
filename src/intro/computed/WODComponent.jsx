import React, { createRef } from 'react'
import { observable, computed, decorate } from 'mobx'
import { observer } from 'mobx-react'

class Maths {
  a = 0
  b = 0

  get add() {
    return this.a + this.b
  }

  get subtract() {
    return this.a - this.b
  }

  get multiply() {
    return this.a * this.b
  }

  get divide() {
    return this.a / this.b
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.firstInput = createRef()
    this.secondInput = createRef()
  }

  handleClick = e => {
    e.preventDefault()
    const a = this.firstInput.current.value
    const b = this.secondInput.current.value

    math.a = a
    math.b = b
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
          <div>Addition: {math.add}</div>
          <div>Subtraction: {math.subtract}</div>
          <div>Multiplication: {math.multiply}</div>
          <div>Division: {math.divide}</div>
        </div>
      </>
    )
  }
}

/**
 * adding into mobx
 */
decorate(Maths, {
  a: observable,
  b: observable,
  add: computed,
  subtract: computed,
  multiply: computed,
  divide: computed,
})

// making the component to be observed
observer(Calculator)

// creating object
const math = new Maths()

export { Calculator }
export default Calculator
