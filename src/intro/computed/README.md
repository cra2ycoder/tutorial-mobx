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

class Container {
  @observable list = []

  @computed get whenNewItemAddedToList() {
    return list.length
  }

  @computed set addNewItemToList(item) {
    this.list.push(item)
  }
}
```

- without decorators

```js
import { observable, computed, decorate } from 'mobx'

class Container {
  list = []

  get whenNewItemAddedToList() {
    return list.length
  }

  set addNewItemToList(item) {
    this.list.push(item)
  }
}

decorate(Container, {
    list: observable
    whenNewItemAddedToList: computed
    addNewItemToList: computed
})
```