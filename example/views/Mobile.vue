<template>
  <div class="mobile">
    <table></table>
    <div class="row">
      <button @click="toast()">toast</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toast () {
      this.$toast({message: '来测试一下ya hadk daklsfjl akdfadsf adsf asdf asdf afd asf da', duration: 1000})
    }
  }
}
</script>

<style scoped>
.mobile {
  width: 100%;
  height: 100%;
  max-width: 768px;
  margin: 0 auto;
  background: #f0f0f0;
  box-sizing: border-box;
  padding: 1rem;
}
.row {
  width: 100%;
  margin: 1rem 0;
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