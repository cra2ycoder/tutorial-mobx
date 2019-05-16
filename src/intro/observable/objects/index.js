import { observable, action, autorun } from 'mobx'

const mobxProfile = observable(
  // props
  {
    // observable
    name: 'mobx',
    version: 5.9,

    // computed
    get info() {
      return `name: ${this.name} version: ${this.version}`
    },

    // action -> see decorators
    setVersion(newVersion) {
      this.version = newVersion
    },
  },
  // decorators
  {
    setVersion: action,
  }
)

autorun(() => {
  console.log(mobxProfile.info)
})

// autorun will be called automatically
mobxProfile.name = 'javascript'

// autorun will be called automatically
mobxProfile.version = 6.0

export { mobxProfile }
export default mobxProfile
