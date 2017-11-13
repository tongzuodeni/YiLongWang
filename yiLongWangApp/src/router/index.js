import Vue from 'vue'
import Router from 'vue-router'
import SouYe from '@/views/souye'
import HuangSan from '../views/huangSan'
import DengLu from '../views/dengLu'
import ZhuCe from '../views/zhuCe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'souye',
      component: SouYe
    },
    {
    	path:'/views/huangSan',
    	name:'huangSan',
    	component:HuangSan
    },
    {
    	path:'/views/dengLu',
    	name:'dengLu',
    	component:'DengLu'
    },
    {
    	path:'/views/zhuCe',
    	name:'zhuCe',
    	component:'ZhuCe'
    }
  ]
})
