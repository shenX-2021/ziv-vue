<template>
  <div class="home">
    <div class="option-box">
      <div class="option">
        PC端
      </div><router-link to="/mobile">
        <div class="option">
          移动端        
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
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