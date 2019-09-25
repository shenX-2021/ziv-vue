<template>
  <transition name="mvue">
    <div class="mvue-toast" v-show="visible" :class="positionClass">
      <span class="mvue-toast-text">{{message}}</span>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    template: '<div class="mvue-toast">test</div>',
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

<style lang="less">
  .mvue-toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    font-size: .9rem;
    transition: opacity .3s linear;
  }
  .mvue-enter, .mvue-leave-active {
    opacity: 0;
  }
  .is-top {
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    // margin-left: -50%;
  }
  .is-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // margin-left: -50%;
    // margin-top: -50%;
  }
  .is-bottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    // margin-left: -50%;
  }
</style>