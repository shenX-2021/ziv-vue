## 介绍 
建立此仓库的目的是为了学习vue和练手，会更新一些自己平时做的自我感觉良好 :stuck_out_tongue_closed_eyes: 的组件。

## 安装
```
npm i ziv-vue --save
```

## 目录

### 移动端
* <a href="#toast">toast</a>
* <a href="#tab-container">tab-container</a>


## 组件
### <span id="toast">toast</span>
设置为全局方法：
```javascript
// main.js
import {mobile} from 'ziv-vue';
const {Toast} = mobile;
Vue.mixin({
  methods: {
    $toast: Toast
  },
})
```
用法：
```javascript
// 显示toast
this.$toast('hello i am toast');

// 设置toast显示时长
this.$toast({message: 'wait 3 seconds', duration: 3000}); // 显示toast，三秒后消失，默认1.5秒

// 设置toast位置
this.$toast({message: 'top', position: 'top'}); // 在上方显示toast
this.$toast({message: 'middle', position: 'middle'}); // 在中间显示toast，默认值
this.$toast({message: 'bottom', position: 'bottom'}); // 在下方显示toast

// 设置样式
this.$toast({message: 'test class', className: 'test-class'}); // test-class的样式将覆盖默认样式
```

### <span id="tab-container">tab-container</span>

淘宝示例动图：

![淘宝示例](./assets/taobao.gif)

引入组件：
```vue
// *.vue
<template>
  <div class="tab-container">
    <!-- 通过navList设置tab栏数量和标题 -->
    <TabContainer :navList="navList">
      <!-- 通过slot插槽引入每一栏的内容，name为content加上栏目的索引，例如content0 -->
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
import {mobile} from 'ziv-vue';
const {TabContainer} = mobile;
export default {
  components: {
    TabContainer
  },
  data () {
    return {
      headHeight: 0,
      navList: ['tab0', 'tab1', 'tab2'],
      list: [
        [
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
          }
        ],
        [
          {
            url: '',
            img: '',
            title: '我在第三栏',
            time: '03:32'
          }
        ]
      ]
    }
  }
}
</script>
```