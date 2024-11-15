<template>
  <div id="Software" class="container">
    <div class="row">
      <div id="left" class="col-md-4 col-xs-12">
        <ul class="left-container wow bounceInLeft">
          <p>自研产品</p>
          <li v-for="(item, index) in softwareList" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div id="right" class="col-md-8 col-xs-12 wow bounceInRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup name="Software">
import WOW from 'wow.js'
import { onMounted } from 'vue'

const softwareList = [
  {
    path: '/software/mgps',
    name: '迷你低功耗定位'
  },
  {
    path: '/software/mini4gcam',
    name: '迷你记录仪/图传'
  },
  {
    path: '/software/bioadc',
    name: '脑/肌电采集解决方案'
  },
  {
    path: '/software/heyusth',
    name: '有意思的模块'
  },
  {
    path: '/software/industrial',
    name: '低功耗工业物联网方案'
  }
]

onMounted(() => {
  // var wow = new WOW()
  // wow.init()
})
</script>

<style scoped>
#left {
  margin: 50px 0;
}
.left-container {
  width: 60%;
  margin: 0 auto;
  border: 1px solid #474747;
  border-radius: 5px;
}
.left-container > p {
  text-align: center;
  line-height: 45px;
  padding: 0;
  margin: 0;
  background: #474747;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.left-container > li {
  text-align: center;
  height: 38px;
  line-height: 38px;
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container > li > a {
  text-decoration: none;
}
.left-container > li:hover {
  background: #928989;
}
#right {
  padding: 50px 0;
}
@media screen and (max-width: 768px) {
  #right {
    padding: 15px;
  }
}
</style>

