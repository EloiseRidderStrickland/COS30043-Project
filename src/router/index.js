import { createRouter, createWebHistory } from 'vue-router'

// Main Components
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'

// Login / Register
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '/about', component: About },
    { path: '/project', component: Project},
    { path: '/login', component: Login},
    { path: '/register', component: Register},

]
const router = createRouter ({
    history: createWebHistory(),
    routes,
})
export default router