
import { initState } from "./state.js"
//混入函数向原型挂载方法
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;
    //vm记录的就是这个Vue实例
    vm.$options = options; //$options就是传入的属性
    //我们发现，要讲数据还原为初始转态通常使用
    //vm.$options.data();   因为我们在实例中将data写成了函数的形式！
    //初始化状态
    initState(vm)
  }
}
