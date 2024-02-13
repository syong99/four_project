import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import BaKer from '../views/BaKer.vue'
import AdeDate from '../views/AdeDate.vue'
import CoffeeData from '../views/CoffeeData.vue'
import TeaData from '../views/TeaData.vue'
import AdminLogin from '../views/AdminLogin.vue'
import CoffeeCreate from '../views/CoffeeCreate.vue'
import AdeDetail from '../views/AdeDetail.vue'
import AdeCreate from '../views/AdeCreate.vue'
import BakeryCreate from '../views/BakeryCreate.vue'
import TeaCreate from '../views/TeaCreate.vue'
import TeaDetail from '../views/TeaDetail.vue'
import CoffeeDetail from '../views/CoffeeDetail.vue'
import BakeryDetail from '../views/BakeryDetail.vue'
import CoffeeList from '../views/CoffeeList.vue'
import AdeList from '../views/AdeList.vue'
import BakeryList from '../views/BakeryList.vue'
import TeaList from '../views/TeaList.vue'
import AdeImageInsert from '../views/AdeImageInsert.vue'
import CoffeeImageInsert from '../views/CoffeeImageInsert.vue'
import BakeryImageInsert from '../views/BakeryImageInsert.vue'
import TeaImageInsert from '../views/TeaImageInsert.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/BaKer',
    name: 'BaKer',
    component: BaKer
  },
  {
    path: '/AdeDate',
    name: 'AdeDate',
    component: AdeDate
  },
  {
    path: '/CoffeeData',
    name: 'CoffeeData',
    component: CoffeeData
  },
  {
    path: '/TeaData',
    name: 'TeaData',
    component: TeaData
  },
  {
    path: '/AdminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/CoffeeCreate',
    name: 'CoffeeCreate',
    component: CoffeeCreate
  },
  {
    path: '/AdeDetail',
    name: 'AdeDetail',
    component: AdeDetail
  },
  {
    path: '/AdeCreate',
    name: 'AdeCreate',
    component: AdeCreate
  },
  {
    path: '/BakeryCreate',
    name: 'BakeryCreate',
    component: BakeryCreate
  },
  {
    path: '/BakeryDetail',
    name: 'BakeryDetail',
    component: BakeryDetail
  },
  {
    path: '/CoffeeDetail',
    name: 'CoffeeDetail',
    component: CoffeeDetail
  },
  {
    path: '/TeaDetail',
    name: 'TeaDetail',
    component: TeaDetail
  },
  {
    path: '/TeaCreate',
    name: 'TeaCreate',
    component: TeaCreate
  },
  {
    path: '/CoffeeList',
    name: 'CoffeeList',
    component: CoffeeList
  },
  {
    path: '/AdeList',
    name: 'AdeList',
    component: AdeList
  },
  {
    path: '/BakeryList',
    name: 'BakeryList',
    component: BakeryList
  },
  {
    path: '/TeaList',
    name: 'TeaList',
    component: TeaList
  },
  {
    path: '/AdeImageInsert',
    name: 'AdeImageInsert',
    component: AdeImageInsert
  },
  {
    path: '/CoffeeImageInsert',
    name: 'CoffeeImageInsert',
    component: CoffeeImageInsert
  },
  {
    path: '/BakeryImageInsert',
    name: 'BakeryImageInsert',
    component: BakeryImageInsert
  },
  {
    path: '/TeaImageInsert',
    name: 'TeaImageInsert',
    component: TeaImageInsert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
