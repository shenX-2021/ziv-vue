<template>
  <div class="mobile">
    <table></table>
    <Top @back="back" :height="headHeight"></Top>
    <div class="desc">
      为确保下列组件能正常使用，请用手机观看，或者打开移动端开发模式
    </div>
    <div class="row">
      <button @click="toast()">toast</button>
    </div>
    <div class="row">
      <button @click="toLink('/tab-container')">tab-container</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMobile: false,
      headHeight: 0
    }
  },
  created () {
    this.isMobile = this.getIsMobile();
    this.headHeight = document.documentElement.offsetHeight * 6 / 100;
  },
  methods: {
    getIsMobile () {
      return /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent);
    },
    toast () {
      this.$toast({message: '来测试一下ya hadk daklsfjl akdfadsf adsf asdf asdf afd asf da', duration: 1000, position: 'middle', className: 'test-class'});
    },
    back () {
      this.$router.back();
    },
    toLink (path) {
      if (!this.isMobile) {
        if (['/tab-container'].includes(path)) {
          return this.$toast('暂不支持在pc端展示该组件');
        }
      }
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.mobile {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f0f0f0;
  box-sizing: border-box;
}
.desc {
  width: 100%;
  box-sizing: border-box;
  padding: 0 2vw;
  text-indent: 2em;
  margin-top: 2vh;
}
.row {
  width: 100%;
  margin: 1rem 0;
  text-align: center;
}
.row button {
  border: 0;
  border-radius: 4px;
  background: burlywood;
  color: #fff;
  width: 80%;
  padding: .4rem 0;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
}
</style>

<style >
.test-class {
  color: #000;
  background: #fff;
}
</style>