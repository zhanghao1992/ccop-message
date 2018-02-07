import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
const Login = _import('Login')
const Index = _import('Index')
const Panel = _import('Panel')// 监控看板
const Projects = _import('Projects/Projects')// 项目列表
const ProjectDetail = _import('Projects/ProjectDetail')// 项目详情
const Notifiers = _import('Notifiers')// 通知人
const AlarmItem = _import('AlarmItem/AlarmItem')// 报警项
const Jurisdiction = _import('Jurisdiction')// 权限
const Macro = _import('Macro')// 宏
const NotFound = _import('NotFound')
import store from '../store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          redirect: 'panel'
        },
        {
          path: 'panel',
          component: Panel,
          meta: {
            // requireAuth: 'admin',
            title: '监控面板'
          }
        },
        {
          path: 'projects',
          component: Projects,
          meta: {
            // requireAuth: 'admin',
            title: '项目列表'
          }
          // beforeEnter(to, from, next) {
          //   console.log(to)
          //   console.log(from)
          //   next()
          // }
        },
        {
          path: 'project-detail/:id',
          component: ProjectDetail
        },
        {
          path: 'notifiers',
          component: Notifiers,
          meta: {
            // requireAuth: 'admin',
            title: '通知人列表'
          }
        },
        {
          path: 'alerm-item',
          component: AlarmItem,
          meta: {
            // requireAuth: 'admin',
            title: '报警项列表'
          }
        },
        {
          path: 'jhonhurisdiction',
          component: Jurisdiction,
          meta: {
            // requireAuth: 'admin',
            title: '权限列表'
          }
        },
        {
          path: 'macro',
          component: Macro,
          meta: {
            // requireAuth: 'admin',
            title: '宏列表'
          }
        }
      ]
    }
  ]
})
/* 页面权限验证 */
router.beforeEach((to, from, next) => {
  // console.log(to)
  // const WL = window.localStorage
  // const userInfo = JSON.parse(WL.getItem('userInfo'))
  // store.state.user = userInfo
  if (to.meta && to.meta.requireAuth) {
    store.dispatch('setUser').then(() => {
      if (store.getters.user && store.getters.user.type === to.meta.requireAuth) {
        next()
      } else {
        if (!store.getters.user || store.getters.user === null) {
          next({
            path: '/',
            component: Login
          })
        } else {
          next()
        }
      }
    })
    // 获取session
  } else {
    next()
  }
})

// 页面title
router.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = '报警平台'
  }
})
export default router
