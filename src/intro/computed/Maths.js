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

const math = new Maths()

export { math }
export default math
