# Mobx

- Simple, scalable state management
- A battle tested library
- transparently applying functional reactive programming (TFRP).

**The philosophy behind MobX is very simple:**

`Anything that can be derived from the application state, should be derived. Automatically.`

which includes the UI, data serialization, server communication, etc.

---

# few core concepts

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

---

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

---

## Reactions

---

## React components

---

## Custom reactions
