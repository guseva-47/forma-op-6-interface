import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

const router = new Router({
    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        { 
          path: '/',
          name: 'hello',
          component: Hello 
        },
        { path: '*', redirect: '/' }
    ]
});


export default router;