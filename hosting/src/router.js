import VueRouter from 'vue-router';
import Home from './components/homeComponent/Home.vue';
import Firebase from './components/firebaseComponent/Firebase.vue';
import WebAuth from './components/webAuthComponent/WebAuth.vue';

const routes = [
    {path:'/', component: Home},
    {path:'/web-auth', component: WebAuth},
    {path:'/firebase', component: Firebase},
];

export default new VueRouter({
    routes
});