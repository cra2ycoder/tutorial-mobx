## Observable state

- its used to make the property to be observable, like act as a `variables`
- support all values, `number, boolean, string, object and arrays`

**usage:**

- with decorators

```js
import { observable } from 'mobx'

class Container {
  @observable count = 0
}
```

- without decorators

```js
import { observable, decorate } from 'mobx'

class Container {
  count = 0
}

decorate(Container, {
  count: observable,
})
```
