<template>
  <transition name="ziv">
    <div class="ziv-toast" v-show="visible" :class="positionClass">
      <span class="ziv-toast-text">{{message}}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        visible: false
      }
    },
    props: {
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      message: {
        type: String,
        default: ''
      }
    },
    computed: {
      positionClass () {
        var classes = []
        switch (this.position) {
          case 'top': 
            classes.push('is-top');
            break;
          case 'middle':
            classes.push('is-middle');
            break;
          case 'bottom':
            classes.push('is-bottom');
            break;
        }
        classes.push(this.className);
        return classes.join(' ');
      }
    }
  }
</script>

<style>
  .ziv-toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    font-size: 1.6rem;
    transition: opacity .3s linear;
  }
  .ziv-enter, .ziv-leave-active {
    opacity: 0;
  }
  .is-top {
    top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
  .is-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .is-bottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
  }
</style>