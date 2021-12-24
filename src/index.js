//Vue就是一个构造函数

import { initMixin } from "./init.js";

function Vue(options) {
  //做一些Vue的初始化操作
  this._init(options)
}

//导出的时候就挂载了原型方法，这样做的目的是为了代码的分割
initMixin(Vue);

if (window) {
  window.Vue = Vue;
}

export default Vue;
