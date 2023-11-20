import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";

const routes = [
    {path: '/', name: 'Home', component: HomeView},
    {path: '/About', name: 'About', component: AboutView},
    {path: '/Contacts', name: 'Contacts', component: ContactsView},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router }; 