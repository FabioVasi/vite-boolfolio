import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import BlogView from "./views/BlogView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import SingleTypeView from "./views/SingleTypeView.vue";
import SingleTechnologyView from "./views/SingleTechnologyView.vue";

import NotFoundView from "./views/NotFoundView.vue";

const routes = [
    {path: '/', name: 'Home', component: HomeView},
    {path: '/About', name: 'About', component: AboutView},
    {path: '/Blog', name: 'Blog', component: BlogView},
    {path: '/Contacts', name: 'Contacts', component: ContactsView},

    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router }; 