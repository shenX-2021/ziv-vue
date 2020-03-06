import Vue from 'vue';
import toastVue from './toast.vue';

const ToastConstructor = Vue.extend(toastVue);
let instancePool = [];

let getAnInstance = () => {
  if (instancePool.length > 0) return instancePool.shift();

  return new ToastConstructor({
    el: document.createElement('div')
  })
}

let returnAnInstance = instance => {
  if (instance) instancePool.push(instance);
}

function removeDom (e) {
  if (e.target.parentNode) {
    e.target.parentNode.removeChild(e.target);
  }
}

ToastConstructor.prototype.close = function () {
  this.visible = false;
  this.closed = true;
  this.$el.addEventListener('transitionend', removeDom);
  returnAnInstance(this);
}

let Toast = (opt = {}) => {
  return new Promise((resolve) => {
    let duration = opt.duration || 1500;
    
    let instance = getAnInstance();
    instance.closed = false;
    instance.message = typeof opt === 'string' ? opt : opt.message;
    instance.position = opt.position ? opt.position : 'middle';
    instance.className = opt.className || '';
    clearTimeout(instance.timer);
  
  
    document.body.appendChild(instance.$el);
    instance.visible = true;
  
    instance.$el.removeEventListener('transitionend', removeDom);
    ~duration && (instance.timer = setTimeout(() => {
      if (instance.closed) return resolve();
      instance.close();
      return resolve()
    }, duration));
  })
}

export default Toast;