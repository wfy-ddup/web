import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Apply from '@/pages/apply.vue'
import Research from '@/pages/research.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/apply',
      component: Apply
    },
    {
      path: '/research',
      component: Research
    }
  ]
})
