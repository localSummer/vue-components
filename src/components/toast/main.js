/* eslint-disable no-unexpected-multiline */
import Vue from 'vue';
import Main from './main.vue';

let ToastContructor = Vue.extend(Main);
let instance = null;

let Toast = function(options = {}) {
  instance = new ToastContructor({
    data: options,
  });
  document.body.appendChild(instance.$mount().$el);
};

['success', 'error'].forEach(type => {
  Toast[type] = options => {
    options.type = type;
    return Toast(options);
  }
});

export default Toast;
