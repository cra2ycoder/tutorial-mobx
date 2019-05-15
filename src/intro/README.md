# Mobx

- Simple, scalable state management
- A battle tested library
- transparently applying functional reactive programming (TFRP).

**The philosophy behind MobX is very simple:**

`Anything that can be derived from the application state, should be derived. Automatically.`

which includes the UI, data serialization, server communication, etc.

---

# few core concepts

- [@observable](https://egghead.io/lessons/react-sync-the-ui-with-the-app-state-using-mobx-observable-and-observer-in-react)
- [@computed](https://mobx.js.org/refguide/computed-decorator.html)
- [@action + @action.bound](https://mobx.js.org/refguide/action.html)

**NOTE**

- Mobx doesnot support `Function Component` only works with `React Components` which is **class** specific. Since, it would require component lifecycle method to update the component

## Reference Links

https://devhints.io/mobx
