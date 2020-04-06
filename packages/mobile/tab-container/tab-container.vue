<template>
  <div class="sign">
    <div class="nav-list">
      <div :class="`nav-item ${navClass}`" v-for="(nav, index) in navList" :key="index" @click="changeIdx(index)">
        {{nav}}
      </div>
      <div class="nav-slide-box" :style="`transform: translate(${computedLeft}%); width: ${navWidth}px; border-bottom: 2px solid ${slideBarColor}`"></div>
    </div>
    <div class="content-box" @scroll="scroll($event)">
      <div :class="{'slide-box': true, 'sliding': isSliding}" :style="`width: ${navList.length * 100}%; transform: translate(${left}px);`" @touchstart="touchStart($event)" @touchmove="touching($event)" @touchend="touchEnd($event)">
        <div class="content-list" v-for="(listItem, index) in navList" :key="index">
          <slot :name="`content${index}`"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-container',
  data () {
    return {
      navWidth: 0,        // tab的宽度值
      currentIdx: 0,      // 当前的tab的索引值
      moveType: 0,        // 移动的type值，1为横向移动，2为纵向移动。初始值为0
      contentBoxWidth: 0, // 内容区的宽度
      left: 0,            // 当前的left值
      initX: 0,           // touchstart时的x坐标
      initY: 0,           // touchstart时的Y坐标
      initLeft: 0,        // touchstart时的left值
      initTime: 0,        // touchstart时的时间点
      SPEED_LIMIT: 1,     // 速度限制，超过该速度则跳转下一个tab
      isSliding: false,   // 是否开启滑动动画
      MOVE_TYPE_ROW: 1,   // 横向滑动的moveType值
      MOVE_TYPE_COL: 2,   // 纵向滑动的moveType值
    }
  },
  props: {
    navList: {
      default: [],
      required: true
    },
    navClass: {
      default: ''
    },
    slideBarColor: {
      default: '#4A1AA1'
    }
  },
  mounted () {
    this.contentBoxWidth = document.querySelector('.content-box').offsetWidth;
    this.navWidth = document.getElementsByClassName("nav-item")[0].offsetWidth;
  },
  computed: {
    computedLeft () {
      return this.currentIdx * 100;
    }
  },
  methods: {
    // 点击tab，改变索引值
    changeIdx (idx) {
      this.currentIdx = idx;
      this.isSliding = true;
      this.left = this.initLeft = -this.contentBoxWidth * this.currentIdx;
    },
    touchStart (e) {
      this.isSliding = false
      this.initX = e.changedTouches[0].clientX;
      this.initY = e.changedTouches[0].clientY;
      this.initTime = Date.now();
    },
    touching (e) {
      if (this.moveType === 0) { // 判断是横向移动还是纵向移动
        let deltaX = e.changedTouches[0].clientX - this.initX;
        let deltaY = e.changedTouches[0].clientY - this.initY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) this.moveType = this.MOVE_TYPE_ROW;
        else this.moveType = this.MOVE_TYPE_COL;
      } else if (this.moveType === this.MOVE_TYPE_ROW) { // 横向移动
        e.preventDefault();

        this.left = e.changedTouches[0].clientX - this.initX;
        // 限制横向移动不要超出范围
        if (this.initLeft + this.left > 0) this.left = 0;
        else if (this.initLeft + this.left < -this.contentBoxWidth * (this.navList.length - 1)) this.left = - this.contentBoxWidth * (this.navList.length - 1);
        else this.left = this.left + this.initLeft
      } 
    },
    touchEnd (e) {
      if (this.moveType === this.MOVE_TYPE_ROW) {
        // 计算滑动速度
        let ms = Date.now() - this.initTime;
        let left = e.changedTouches[0].clientX - this.initX;
        let speed = left / ms;
        if (speed > this.SPEED_LIMIT) { // 右滑速度超过限制，左移一个tab
          this.currentIdx--;
          if (this.currentIdx < 0) this.currentIdx = 0;
        } else if (speed < -this.SPEED_LIMIT) { // 左滑速度超过限制，右移一个tab
          this.currentIdx++;
          if (this.currentIdx > this.navList.length - 1) this.currentIdx = this.navList.length - 1;
        } else { // 移动距离超过半个tab，跳到下一个tab
          this.currentIdx = Math.abs(parseInt((this.left - this.contentBoxWidth / 2) / this.contentBoxWidth));

        }
        this.left = this.initLeft = -this.contentBoxWidth * this.currentIdx;
      }
      // 恢复默认值
      this.isSliding = true;
      this.moveType = 0;
      this.initLeft = this.left;
    },
    scroll (e) {
      e.preventDefault();
    }
  }
}
</script>

<style scoped >
.sign {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 导航栏 */
.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  font-size: 1.6rem;
  box-sizing: border-box;
  position: relative;
}
.nav-list .nav-item {
  flex-grow: 1;
  width: 100%;
  text-align: center;
}
.nav-list .nav-slide-box {
  position: absolute;
  width: 33.33333%;
  height: 100%;
  z-index: 1;
  left: 0;
  transition: transform .17s linear 0s;
  box-sizing: border-box;
}
/* 内容区 */
.content-box {
  width: 100%;
  height: 94%;
  overflow-y: hidden;
  overflow-x: hidden;
  box-sizing: border-box;
}
.content-box .slide-box{
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.content-box .sliding {
  transition: transform .17s linear 0s;
}
.content-box .content-list {
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding-bottom: 2vh;
}
.content-box .content-list::after {
  display: block;
  content: '';
  clear: both;
}
</style>