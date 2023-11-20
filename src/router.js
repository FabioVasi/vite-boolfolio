import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";

const routes = [
    {path: '/', name: 'HomeView', component: HomeView},
    {path: '/About', name: 'Aboutview', component: AboutView},
    {path: '/Contacts', name: 'ContactsView', component: ContactsView},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router }; 