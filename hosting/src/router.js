import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Firebase from './components/Firebase.vue';
import WebAuth from './components/WebAuth.vue';

const routes = [
    {path:'/', component: Home},
    {path:'/web-auth', component: WebAuth},
    {path:'/firebase', component: Firebase},
];

export default new VueRouter({
    routes
});