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

const initOpt = {
  duration: 1500,
  message: '',
  position: 'middle',
  className: ''
}
let Toast = (opt = {}) => {
  return new Promise((resolve) => {
    
    let instance = getAnInstance();
    instance.closed = false;
    if (typeof opt === 'object') {
      instance.message = opt.message;
      instance.position = opt.position || 'middle';
      instance.className = opt.className || '';
    } else {
      opt = {
        message: opt
      }
    }
    Object.assign(instance, initOpt, opt);
    clearTimeout(instance.timer);
  
  
    document.body.appendChild(instance.$el);
    instance.visible = true;
  
    instance.$el.removeEventListener('transitionend', removeDom);
    ~instance.duration && (instance.timer = setTimeout(() => {
      if (instance.closed) return resolve();
      instance.close();
      return resolve()
    }, instance.duration));
  })
}

export default Toast;