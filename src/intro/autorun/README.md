# Autorun

- use **autorun** if you have a function that should run automatically
- **autorun** doesn't result in a new value
- about initiating effects, not about producing new values

**syntax**

```jsx
const disposer = autorun(reaction => {
  /* do some stuff */
})
disposer()

// or

autorun(reaction => {
  /* do some stuff */
  reaction.dispose()
})
```

**example**

```jsx
```
