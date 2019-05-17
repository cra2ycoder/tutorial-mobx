## Observable Objects

- this is one of another way to do state management using mobx
- But, when using **observable.object** function directly, please keep note the following:

  - observable works only for the properties when we making the object, not for later properties (means which will be added dynamically)

---

**syntax**

```jsx
observable.object(props, decorators?, options?)

// or
observable(props, decorators?, options?)
```

**example**

```jsx
const props = {
  name: 'mobx',
  version: '5.4.9',

  setVersion(newVerison) {
    this.version = newVerison
  },
}

// optional
const decorators = {
  setVersion: action,
}

const mobxObj = observable.object(props, decorators)
```
