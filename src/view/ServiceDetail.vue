<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">相关服务</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>定制开发服务</p>
            <li
              :class="item.id == id ? 'active' : ''"
              v-for="(item, index) in serviceNavList"
              :key="index"
            >
              <a href="javascript:;" @click.stop="toSection(item.id)">{{
                item.title
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content wow zoomIn">
          <div
            class="content-block"
            v-for="(item, index) in serviceContentList"
            :key="index"
          >
            <h2 :id="item.id">
              {{ item.title }}
              <small>/ {{ item.eng_title }}</small>
            </h2>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="serviceDetail">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import WOW from 'wow.js'
const id = ref('section-1')
const serviceNavList = [
  {
    id: 'section-1',
    title: '硬件设计服务'
  },
  {
    id: 'section-2',
    title: '软件系统开发服务'
  },
  {
    id: 'section-3',
    title: '物联网系统开发服务'
  },
  {
    id: 'section-4',
    title: '生产代理服务'
  }
]
const serviceContentList = [
  {
    id: 'section-1',
    title: '硬件设计服务',
    eng_title: 'Hardware Design',
    content:
      '<h3>MCU板级设计</h3>\
      <p>提供MCU板级设计服务，包括硬件选型、PCB设计、电路设计、电路板制作验证等。</p>\
      <h3>MCU固件开发</h3>\
      <p>提供MCU固件开发服务，包括乐鑫/意法/沁恒/合宙等MCU的固件开发，以及配套后端/服务器/APP-小程序/H5等开发。</p>\
      <h3>Linux开发</h3>\
      <p>提供Linux硬件开发服务，如高通410/arm64硬件的linux移植及物联网功能开发。</p>\
      <h3>FPGA系统设计</h3>\
      <p>提供FPGA系统设计服务，包括FPGA选型、FPGA测试、FPGA优化等。</p>\
      '
  },
  {
    id: 'section-2',
    title: '软件系统开发服务',
    eng_title: 'Web Dev',
    content:
      '<h3>Web架构设计</h3><p>提供专业前后端架构设计开发服务，包括serverless、docker化部署、微服务、vue等前端框架开发、django后端开发。</p>\
      <h3>推荐架构设计</h3><p>xxcfvsdafewawefwqaedg</p>'
  },
  {
    id: 'section-3',
    title: '物联网系统开发服务',
    eng_title: 'IoT Dev',
    content:
      '<h3>全栈研发</h3><p>对于复杂项目，提供从PCB制版、硬件开发、软件开发、系统集成、产品化落地等全栈研发服务。</p>'
  },
  {
    id: 'section-4',
    title: '生产代理服务',
    eng_title: 'Production Service',
    content:
      '<h3>验证生产</h3><p>支持小样验证SMT生产及测试。</p>\
      <h3>批量生产</h3><p>提供代理批量SMT及烧录。</p>'
  }
]
function toSection(_id) {
  id.value = _id
  let top = document.getElementById(id.value).offsetTop
  $(window).scrollTop(top + 300)
  $('#myNav').affix({
    offset: {
      top: 300
    }
  })
}
const route = useRoute()
const props = defineProps({
  id: {
    type: String,
    required: true
    // default: 'section-1222'
  }
})
onMounted(() => {
  console.log('route：', route, route.params, route.query)
  console.log('history.state：', history.state)
  id.value = history.state.id
  console.log(id.value, 'pp')
  let top = document.getElementById(id.value).offsetTop
  $(window).scrollTop(top + 300)
  $('#myNav').affix({
    offset: {
      top: 300
    }
  })
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner_2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
</style>
