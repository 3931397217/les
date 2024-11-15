import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// const pages = import.meta.glob('../src/pages/**/*.vue')
// const routes = Object.keys(pages).map((path)=>{
//   let name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase();
//   if(name.substring(name.length - 5) == 'index'){
//     name = name.slice(0, -5);//去掉最后的index
//   }
//   return {
//     path: name === '/home' ? '/': name,
//     component: pages[path]
//   }
// })

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/software',
        name: 'software',
        component: () => import('@/view/Software.vue'),
        redirect: '/software/mgps',
        meta: {
          title: '自研产品'
        },
        children: [
          {
            path: '/software/mgps',
            name: 'mgps',
            component: () => import('@/view/Software_mgps.vue'),
            meta: {
              title: '自研产品丨迷你低功耗定位'
            }
          },
          {
            path: '/software/mini4gcam',
            name: 'mini4gcam',
            component: () => import('@/view/Software_mini4gcam.vue'),
            meta: {
              title: '自研产品丨迷你记录仪/图传'
            }
          },
          {
            path: '/software/bioadc',
            name: 'bioadc',
            component: () => import('@/view/Software_bioadc.vue'),
            meta: {
              title: '自研产品丨脑/肌电采集解决方案'
            }
          },
          {
            path: '/software/heyusth',
            name: 'heyusth',
            component: () => import('@/view/Software_heyusth.vue'),
            meta: {
              title: '自研产品丨有意思的模块'
            }
          },
          {
            path: '/software/industrial',
            name: 'industrial',
            component: () => import('@/view/Software_industrial.vue'),
            meta: {
              title: '自研产品丨低功耗工业物联网方案'
            }
          }
        ]
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: '相关服务'
        }
      },
      {
        path: '/servicedetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        props: true,
        meta: {
          title: '相关服务-详情'
        }
      },
      {
        path: '/newsinformation',
        name: 'newsInformation',
        component: () => import('@/view/NewsInformation.vue'),
        meta: {
          title: '新闻动态'
        }
      },
      {
        path: '/companyintroduction',
        name: 'companyIntroduction',
        component: () => import('@/view/CompanyIntroduction.vue'),
        meta: {
          title: '公司介绍'
        }
      },
      {
        path: '/jobchance',
        name: 'jobChance',
        component: () => import('@/view/JobChance.vue'),
        meta: {
          title: '工作机会'
        }
      },
      // {
      //   path: '/contactus',
      //   name: 'contactUs',
      //   component: () => import('@/view/ContactUs.vue'),
      //   meta: {
      //     title: '联系我们'
      //   }
      // }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}

