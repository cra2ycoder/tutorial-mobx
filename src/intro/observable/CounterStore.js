import { observable } from 'mobx'

/**
 * @description
 * creating a store
 */
class CounterStore {
  @observable count = 0
}

/**
 * @description
 * creating an instance for store
 */
const counterStore = new CounterStore()

export { CounterStore, counterStore }
export default counterStore
