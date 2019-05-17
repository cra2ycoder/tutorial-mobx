## Observable Objects

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
