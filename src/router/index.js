import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/project', component: Project}
]
const router = createRouter ({
    history: createWebHistory(),
    routes,
})
export default router