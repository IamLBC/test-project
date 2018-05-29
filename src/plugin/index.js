export default {
  install (Vue) {
    let vm = new Vue()
    Object.defineProperty(Vue, '$eventBus', {
      value: vm
    })
    Object.defineProperty(Vue.prototype, '$eventBus', {
      value: vm
    })
  }
}