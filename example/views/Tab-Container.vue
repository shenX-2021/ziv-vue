<template>
  <div class="tab-container">
    <TabContainer :navList="navList" navClass="nav">
      <div :slot="`content${index}`" v-for="(listItem, index) in list" :key="index">
        <div class="content-item" v-for="(item, idx) in listItem" :key="idx">
          <div class="img-box">
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </TabContainer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: ['tab0', 'tab1', 'tab2'],
      list: [
        [
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '10:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第一栏',
            time: '03:32'
          }
        ],
        [
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第二栏',
            time: '03:32'
          }
        ],
        [
          {
            url: '',
            img: '',
            title: '我在第三栏',
            time: '14:32'
          },
          {
            url: '',
            img: '',
            title: '我在第三栏',
            time: '03:32'
          }
        ]
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
.tab-container {
  width: 100%;
  height: 100%;
}

.content-box .content-item:nth-child(odd) {
  margin: 0 3% 0 7%;
}
.content-box .content-item:nth-child(even) {
  margin: 0 7% 0 3%;
}
.content-box .content-list .content-item {
  width: 40%;
  float: left;
  border: 1px solid;
  box-sizing: border-box; 
  margin-top: .46rem;
}
.content-box .content-item .img-box {
  width: 100%;
  height: 40vw;
  background: rgba(205, 205, 205, 1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.content-box .content-item .title {
  font-size: .55rem;
  margin: .4rem .4rem;
  line-height: 1rem;
  word-break: break-all;
}

</style>