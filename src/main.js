import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router' 
import App from './App.vue'

import front from './pages/front-page.vue'
import index from './pages/index-page.vue'
import recipe from './pages/recipe-page.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {path: '/', component: front}, 
        {path: '/index', component: index}, 
        {path: '/:recipe',  component: recipe}
    ]
})
createApp(App).use(router).mount('#app');

