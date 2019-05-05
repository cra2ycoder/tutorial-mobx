## Computed values

- when the data gets modified, computed will be triggered the function automatically
  best example is `google spread sheet`

  - ![](https://cra2ycoder.sirv.com/tutorial-mobx/computed_mobx.gif)

- `computed` can be either any getter/setter:
  - `set`: function will be triggered while writing
  - `get`: function will be triggered while getting

**usage:**

- with decorators

```js
import { observable, computed } from 'mobx'

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
```

- without decorators

```js
import { observable, computed, decorate } from 'mobx'

class Maths {
  a = 0
  b = 0

  get add() {
    return this.a + this.b
  }

  get subtract() {
    return this.a - this.b
  }
}

decorate(Maths, {
  a: observable,
  b: observable,
  add: computed,
  subtract: computed,
})
```
