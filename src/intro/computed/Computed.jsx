import React, { createRef } from 'react'
import { observer } from 'mobx-react'
import { math } from './Maths'

@observer
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.firstInput = createRef()
    this.secondInput = createRef()
  }

  handleClick = e => {
    e.preventDefault()
    math.a = +this.firstInput.current.value
    math.b = +this.secondInput.current.value
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
          <div>Addition: {math.add}</div>
          <div>Subtraction: {math.subtract}</div>
        </div>
      </>
    )
  }
}

export { Calculator }
export default Calculator
