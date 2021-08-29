import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard";
import Search from "../views/Search";
import Offers from "../views/Offers";
import Messages from "../views/Messages";
import Settings from "../views/Settings";

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/search',
    name: 'Suche',
    component: Search
  },
  {
    path: '/offers',
    name: 'Angebote',
    component: Offers
  },
  {
    path: '/messages',
    name: 'Nachrichten',
    component: Messages
  },
  {
    path: '/settings',
    name: 'Einstellungen',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
