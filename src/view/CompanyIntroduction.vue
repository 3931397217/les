<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/about_img.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h3>北京合羽计算科技有限公司</h3>
          <p class=".text-justify">
            北京合羽计算科技有限公司是一家以物联网软硬件开发为核心的技术服务公司,
            聚集了对物联网软硬件开发有独特创意的高端人才,
            致力于为企业提供物联网软硬件开发服务、系统开发服务以及物联网解决方案。
          </p>
          <p class=".text-justify">
            我们团队成员均来自国内TOP10高校，均具有一线国际芯片/互联网大厂工作经验，具有专业的物联网软硬件开发能力。目前主要提供物联网软硬件研发设计服务、物联网自研产品销售、系统软件架构设计服务等。
            通过前期的技术积累和项目实践，我们将客户定制服务作为公司发展的动力，推动公司技术能力发展，并形成若干创新型产品推向市场，并形成了为客户定制与自身产品结合的良性发展模式。
          </p>
          <p class=".text-justify">
            “让一家公司成功的不是产品本身，而是高效地制造产品的能力。”
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
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
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

