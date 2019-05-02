## Observable state

- its used to make the property to be observable, like act as a `variables`
- support all values, `number, boolean, string, object and arrays`

**usage:**

- with decorators

```jsx
import { observable } from 'mobx'

class Container {
  @observable count = 0
}
```

- without decorators

```jsx
import { observable, decorate } from 'mobx'

class Container {
  count = 0
}

decorate(Container, {
  count: observable,
})
```

- using react component

```jsx
import React from 'react'
import { observable } from 'mobx'

class Counter extends React.Component {
  @observable count = 0

  render() {
    return <div>{this.count}</div>
  }
}
```
