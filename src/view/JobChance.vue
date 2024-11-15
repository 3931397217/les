<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>物联网软硬件工程师(兼职/实习)</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责公司产品及项目系统的功能开发、代码优化；</li>
          <li>负责项目组人员任务的分配与监督，及时解决项目技术问题；</li>
          <li>
            参与系统需求分析与设计，并负责完成硬件电路设计。
          </li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>
            熟悉STM32、ESP32、ESP8266等主流MCU、或沁恒等国产替代MCU开发解决方案；
          </li>
          <li>熟悉4g/NBIOT/蓝牙/wifi等无线通信协议应用开发；</li>
          <li>熟悉嵌入式Linux开发/FPGA开发；</li>
          <li>
            熟悉常见物联网通信协议，如MQTT、CoAP、HTTP、TCP/IP等；
          </li>
          <li>熟悉freertos等嵌入式操作系统开发流程；</li>
          <li>
            掌握基本的电路设计知识，熟悉基本的电路设计及制版流程，具有基本焊接能力；
          </li>
          <li>
            具备良好的编程习惯及较强的文档编写能力；
          </li>
          <li>
            对物联网硬件开发有浓厚兴趣，有较强的学习能力，有较强的动手能力。
          </li>
        </ol>
        <button
          class="center-block btn btn-warning btn-lg"
          @click.stop="submitForm"
        >
          投递简历
        </button>
      </div>


      <div class="JobChance-container wow pulse">
        <h2>前后端架构工程师(兼职/实习)</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责公司产品及项目系统的功能开发、代码优化；</li>
          <li>负责项目组人员任务的分配与监督，及时解决项目技术问题；</li>
          <li>
            参与系统需求分析与设计，并负责完成软件架构设计。
          </li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>
            熟悉前后端开发架构，熟悉Vue等前端框架；或熟悉django、flask等后端框架；
          </li>
          <li>
            熟悉mqtt、coap等物联网通信协议；或熟悉webrtc等音视频通信协议；或熟悉SRT、RTMP等流媒体传输协议；
          </li>
          <li>
            熟悉docker、熟悉基本的git操作、熟悉linux系统操作；
          </li>
          <li>
            掌握数据库原理，精通MYSQL、了解Mongo等并有相关关系数据库设计开发经验,
          </li>
          <li>
            具备良好的编程习惯及较强的文档编写能力；
          </li>
          <li>
            对物联网软件开发有浓厚兴趣，有较强的学习能力，有较强的动手能力。
          </li>
        </ol>
        <button
          class="center-block btn btn-warning btn-lg"
          @click.stop="submitForm"
        >
          投递简历
        </button>
      </div>
    </div>
  </div>
</template>

<script setup name="JobChance">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  let wow = new WOW()
  wow.init()
})
function submitForm() {
  window.open('https://space.bilibili.com/250616280?spm_id_from=333.1007.0.0', '')
}
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
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.JobChance-container ol {
  list-style-type: decimal;
  padding-left: 30px;
}
.JobChance-container ol > li {
  font-size: 14px;
  line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>

