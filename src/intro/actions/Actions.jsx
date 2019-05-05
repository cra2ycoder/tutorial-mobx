import React, { createRef } from 'react'
import { observer } from 'mobx-react'
import { math } from './Math'

@observer
class Actions extends React.Component {
  constructor(props) {
    super(props)
    this.firstInput = createRef()
    this.secondInput = createRef()
  }

  handleClick = e => {
    e.preventDefault()
    math.a = +this.firstInput.current.value
    math.b = +this.secondInput.current.value
    math.add()
  }

  render() {
    return (
      <>
        <h1>Actions:</h1>
        <br />
        <form>
          <input placeholder="enter your first number" ref={this.firstInput} />
          <input
            placeholder="enter your second number"
            ref={this.secondInput}
          />
          <button onClick={this.handleClick}>Add</button>
        </form>
        <div>Result: {math.result}</div>
      </>
    )
  }
}

export { Actions }
export default Actions
