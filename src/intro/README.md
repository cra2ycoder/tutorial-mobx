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
- usage:

  - with decorators

  ```js
  import { observable } from 'mobx'

  class Container {
    @observable count = 0
  }
  ```

  - without decorators

  ```js
  import { observable } from 'mobx'
  class Container {
    count = 0
  }
  decorate(Container, {
    count: observable,
  })
  ```

---

## Computed values

---

## Reactions

---

## React components

---

## Custom reactions
