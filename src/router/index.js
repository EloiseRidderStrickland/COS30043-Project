import { createRouter, createWebHistory } from 'vue-router'

// Main Components
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'

// Login / Register
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Confirmation from '../views/Confirmation.vue'

import Extra from '../views/catalogue/Extra.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/news', name: 'news', component: News },
  { path: '/about', name: 'about', component: About },
  { path: '/project', name: 'project', component: Project},
  { path: '/login', name: 'login', component: Login},
  { path: '/register', name: 'register', component: Register},
  { path: '/confirmation', name: 'confirmation', component: Confirmation},
  { path: '/extra', name: 'extra', component: Extra},
]

const router = createRouter ({
     history: createWebHistory('/cos30043/s104934718/Project/'),
     routes,
})

export default router