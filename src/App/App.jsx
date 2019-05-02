import React from 'react'
import ReactDOM from 'react-dom'
import '../intro'

class App extends React.Component {
  static defaultProps = {}
  render() {
    return (
      <>
        <div>Hello, Welcome!</div>
        <div>My First React App</div>
        <br />
        <hr />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
