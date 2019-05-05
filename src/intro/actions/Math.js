import { observable, action } from 'mobx'

class Math {
  @observable a = 0
  @observable b = 0
  @observable result = ''

  @action
  add() {
    const res = this.a + this.b
    this.result = res
    console.log(`res: ${res}`)
  }
}

const math = new Math()

export { math }
export default math
