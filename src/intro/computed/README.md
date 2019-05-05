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

class BirdStore {
  @observable birdList = []

  @computed get getBirds() {
    return this.birdList.join(',')
  }

  setBirds(newBird) {
    this.birdList.push(newBird)
  }
}
```

- without decorators

```js
import { observable, computed, decorate } from 'mobx'

class BirdStore {
  birdList = []

  get getBirds() {
    return birdList.length
  }

  setBirds(newBird) {
    this.birdList.push(newBird)
  }
}

decorate(BirdStore, {
    birdList: observable
    getBirds: computed
})
```
