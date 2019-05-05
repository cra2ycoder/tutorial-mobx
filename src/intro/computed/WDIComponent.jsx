import React, { createRef } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

@observer
class BirdShop extends React.Component {
  @observable birdsList = []

  @computed get getBirds() {
    return this.birdsList.join(',')
  }

  constructor(props) {
    super(props)

    this.textInput = createRef()
  }

  setBirds(newBird) {
    this.birdsList.push(newBird)
  }

  handleClick = e => {
    e.preventDefault()
    const birdName = this.textInput.current.value
    this.setBirds(birdName)
  }

  render() {
    return (
      <>
        <div>Total Birds: {this.birdsList.length}</div>
        <div>Birds: {this.getBirds}</div>
        <form>
          <input placeholder="enter your bird name!" ref={this.textInput} />
          <button onClick={this.handleClick}>ADD</button>
        </form>
      </>
    )
  }
}

export { BirdShop }
export default BirdShop
