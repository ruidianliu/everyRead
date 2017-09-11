import Vue from 'vue'
import Router from 'vue-router'
import Save from '~/save'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/save',
      name: 'Save',
      component: Save
    }
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
  ]
})
