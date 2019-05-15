# Actions

- used to modify the state
- help us to make our code structure better
- actions are only applied to the function

## Two types

- **action**

  - for plain functions
  - which is not depend on any target object

```jsx
<button onClick={() => math.subtract()}>Add</button>
```

- **action.bound**

  - to use with target object
  - mainly used when required handle with handler elements

```jsx
<button onClick={math.subtract}>Subtract</button>
```
