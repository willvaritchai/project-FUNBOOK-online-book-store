import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import ContactUs from '../views/ContactUs.vue'
import Wishlist from '../views/Wishlist.vue'
const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/:catchMatchFound(.*)',
        name: "NotFound",
        component: NotFound
    },
    {
        path: '/contact-us',
        name: "ContactUs",
        component: ContactUs
    },
    {
        path: '/wishlist',
        name: "Wishlist",
        component: Wishlist
    }
]

const router = createRouter({ history, routes })

export default router