## Type 1 (with decorators)

- more simplest way

```jsx
import { observable, computed, actions } from 'mobx'
import { observer } from 'mobx-react'

class Math {
  @observable a = 0
  @observable b = 0

  @computed get add() {
    return this.a + this.b
  }

  @action
  print() {
    console.log(`result: ${this.add}`)
  }
}

@observer
class Calculator extends React.Component {
  render() {
    return '' // DOM element goes here
  }
}
```

## Type 2 (with no decorators)

```jsx
import { observable, computed, actions, decorate } from 'mobx'
import { observer } from 'mobx-react'

class Math {
  a = 0
  b = 0

  get add() {
    return this.a + this.b
  }

  print() {
    console.log(`result: ${this.add}`)
  }
}

class Calculator extends React.Component {
  render() {
    return '' // DOM element goes here
  }
}

decorate(Math, {
  a: observable,
  b: observable,
  add: computed,
  print: action,
})

observer(Calculator)
```

## Type 3 (inline with react component)

```jsx
import { observable, computed, actions } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Calculator extends React.Component {
  @observable a = 0
  @observable b = 0

  @computed get add() {
    return this.a + this.b
  }

  @actions
  print() {
    console.log(`result: ${this.add}`)
  }

  render() {
    return '' // DOM element goes here
  }
}
```
