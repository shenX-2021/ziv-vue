<template>
  <div class="home">
    <div class="option-box">
      <div class="option" @click="toLink('/pc')">
        PC端
      </div>
      <div class="option" @click="toLink('/mobile')">
        移动端        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    toLink (path) {
      if (path === '/pc') return this.$toast('PC端的组件还不存在，要不你先看看移动端？');
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  text-align: center;
}
.option-box {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size:  1.6rem;
}
.option {
  margin: 4rem 0;
  border-radius: 4px;
  background: burlywood;
  color: #fff;
  padding: .4rem 0;
  cursor: pointer;
  user-select: none;
}
@media screen and (min-width: 769px) {
  .home::after {
    content: '';
    clear: both;
  }
  .option {
    width: 40%;
    margin: 0 5%;
    float: left;
  }
}
</style>