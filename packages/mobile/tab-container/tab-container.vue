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
      navWidth: 0,
      currentIdx: 0,
      initX: 0,
      initY: 0,
      moveType: 0,
      slideBoxWidth: 0,
      listBoxWidth: 0,
      listBox: null,
      left: 0,
      initLeft: 0,
      isSliding: false
    }
  },
  props: {
    navList: {
      default: []
    },
    navClass: {
      default: ''
    },
    slideBarColor: {
      default: '#4A1AA1'
    }
  },
  mounted () {
    this.slideBoxWidth = document.querySelector('.content-box .slide-box').offsetWidth;
    this.listBox = document.querySelector('.content-box');
    this.listBoxWidth = this.listBox.offsetWidth;
    this.navWidth = document.getElementsByClassName("nav-item")[0].offsetWidth;
  },
  computed: {
    computedLeft () {
      return this.currentIdx * 100;
    }
  },
  methods: {
    changeIdx (idx) {
      this.currentIdx = idx;
      this.isSliding = true;
      this.left = this.initLeft =   -this.listBoxWidth * this.currentIdx;
    },
    touchStart (e) {
      this.isSliding = false
      this.initX = e.changedTouches[0].clientX;
      this.initY = e.changedTouches[0].clientY;
    },
    touching (e) {
      if (this.moveType === 0) {
        let deltaX = e.changedTouches[0].clientX - this.initX;
        let deltaY = e.changedTouches[0].clientY - this.initY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) this.moveType = 1;
        else this.moveType = 2;
      } else if (this.moveType === 1) {
        e.preventDefault();

        this.left = e.changedTouches[0].clientX - this.initX;
        if (this.initLeft + this.left > 0) this.left = 0;
        else if (this.initLeft + this.left < -this.listBoxWidth * (this.navList.length - 1)) this.left = - this.listBoxWidth * (this.navList.length - 1);
        else this.left = this.left + this.initLeft
      } 
    },
    touchEnd () {
      this.isSliding = true;
      this.moveType = 0;
      this.initLeft = this.left;

      
      if (this.left + this.listBoxWidth / 2 > 0) this.currentIdx = 0;
      else if (this.left + this.listBoxWidth / 2 > - this.listBoxWidth) this.currentIdx = 1;
      else if (this.left + this.listBoxWidth / 2 > - this.listBoxWidth * 2) this.currentIdx = 2;
      this.currentIdx = Math.abs(parseInt((this.left - this.listBoxWidth/2)/this.listBoxWidth));

      this.left = this.initLeft =   -this.listBoxWidth * this.currentIdx;
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