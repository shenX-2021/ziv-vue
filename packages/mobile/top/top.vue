<template>
  <div class="title" :style="`height: ${finalHeight}px; line-height: ${finalHeight}px; background-color: ${backgroundColor}`">
    <span class="back" @click="backClick">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABPklEQVRoQ9XaywnCQBSF4XO2LsVSbEU7cKkNuFGwA8GVFWgpFuTyykCEEIxhJvcx4zrK/5k7MHEkGn+x8X6EA0RkCeBA8lTyZYYCRGQD4AZg1cUvSL5zIGGALv4xiL2T3FUPGIlP3WmUrlUD/sQ/SW5z4tO1riOkHe8KsIh3A1jFuwAs480B1vGmAI94M4BXvAnAM14d4B2vCoiIVwNExasAIuNnA6LjZwFqiC8G1BJfBBCRI4DLj3170X4+d/8/vD77eUBEXgDWgw8KiS+9A80D2h6hdNuaXsTf2a8Fkb2I+4u3BsQsQA3jNBsQjVABRCLUAFEIVUAEQh3gjTABeCLMAF4IU4AHwhxgjXABWCLcAFYIV4AFwh0wgaj/kG/ieaKNY9YBos2D7h4i/dVgT/Jc8hNLyBooCR17T/OADxdF2jEeBZhxAAAAAElFTkSuQmCC">
    </span>
    <span class="text">{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'top',
    props: {
      title: {
        default: '标题',
        type: String
      },
      height: {
        default: 0,
        type: Number
      },
      backgroundColor: {
        default: '#4A1AA1',
        type: String
      }
    },
    data () {
      return {
        initialHeight: document.body.offsetHeight * 7 / 100
      }
    },
    computed: {
      finalHeight () {
        let h = parseInt(this.height);
        if (!isNaN(h) && h !== 0) return h;
        else return this.initialHeight;
      }
    },
    methods: {
      backClick () {
        this.$emit('back');
      }
    }
  }
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  color: #fff;
  position: relative;
  font-size: 1.6rem;
  box-sizing: border-box;
}
.title span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.title .back {
  left: 3vw;
  display: flex;
  align-items: center;
  height: 100%;
}
.title .text {
  left: 50%;
  transform: translate(-50%, -50%);
}
.title .back img {
  height: 3.3vh;
}
.title .option {
  right: 3vw;
}
</style>