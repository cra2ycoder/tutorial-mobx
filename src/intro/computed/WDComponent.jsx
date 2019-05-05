import React, { createRef } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

class BirdStore {
  @observable birdsList = []

  @computed get getBirds() {
    return this.birdsList.join(',')
  }

  setBirds(bird) {
    this.birdsList.push(bird)
  }
}

@observer
class BirdShop extends React.Component {
  constructor(props) {
    super(props)

    this.textInput = createRef()
  }

  handleClick = e => {
    e.preventDefault()
    const birdName = this.textInput.current.value
    // birdStore.setBirds = birdName
    birdStore.setBirds(birdName)
  }

  render() {
    return (
      <>
        <div>Total Birds: {birdStore.birdsList.length}</div>
        <div>Birds: {birdStore.getBirds}</div>
        <form>
          <input placeholder="enter your bird name!" ref={this.textInput} />
          <button onClick={this.handleClick}>ADD</button>
        </form>
      </>
    )
  }
}

/**
 * object creation
 */
const birdStore = new BirdStore()

export { BirdShop, birdStore }
export default BirdShop
